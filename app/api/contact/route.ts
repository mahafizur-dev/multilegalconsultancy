import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message, website } = body;

    // Honeypot: real users never fill this hidden field. Bots that do get a
    // fake success response so they don't learn to avoid the trap.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 },
      );
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const { error: sendError } = await resend.emails.send({
      from: "MCL Website <no-reply@multilegalconsultancy.com>",
      to: ["adv.tanimarahman@gmail.com"], // where you want to receive inquiries
      replyTo: email,
      subject: `New Consultation Request from ${safeFirstName} ${safeLastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #222429; padding: 24px; text-align: center;">
            <h1 style="color: #c39b65; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">
              New Website Inquiry
            </h1>
          </div>
          <div style="padding: 24px; background-color: #f8f9fa;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #222429;">${safeFirstName} ${safeLastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #222429;">${safeEmail}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; color: #222429;">${safePhone}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background-color: #ffffff; border-left: 4px solid #c39b65;">
              <p style="margin: 0; color: #666; font-weight: bold; margin-bottom: 8px;">Message:</p>
              <p style="margin: 0; color: #222429; line-height: 1.6;">${safeMessage}</p>
            </div>
          </div>
          <div style="padding: 16px; text-align: center; background-color: #1c1e22;">
            <p style="margin: 0; color: #888; font-size: 12px;">
              Sent from the Multilegal Consultancy website contact form
            </p>
          </div>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resend send error:", sendError);
      return NextResponse.json(
        { success: false, error: "Failed to send message" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 },
    );
  }
}
