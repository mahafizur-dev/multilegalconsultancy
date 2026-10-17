import { NextResponse } from "next/server";
import { Resend } from "resend";
import { FIELD_LIMITS } from "@/lib/contact";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Email headers are plain text: strip line breaks so input can't inject headers.
const toHeaderText = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

// Best-effort per-IP rate limit. Memory is per server instance, so on
// serverless hosting this slows bursts rather than enforcing a hard global cap.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentRequests = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (recentRequests.get(ip) ?? []).filter(
    (time) => now - time < RATE_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT) {
    recentRequests.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentRequests.set(ip, recent);
  // Keep the map from growing without bound.
  if (recentRequests.size > 5000) {
    for (const [key, times] of recentRequests) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) {
        recentRequests.delete(key);
      }
    }
  }
  return false;
};

const fail = (status: number, error: string) =>
  NextResponse.json({ success: false, error }, { status });

const asTrimmedString = (value: unknown) =>
  typeof value === "string" ? value.trim() : null;

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  let body: Record<string, unknown>;
  try {
    const parsed = await req.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return fail(400, "Invalid request");
    }
    body = parsed;
  } catch {
    return fail(400, "Invalid request");
  }

  // Honeypot: real users never fill this hidden field. Bots that do get a
  // fake success response so they don't learn to avoid the trap.
  const website = body.website;
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  if (isRateLimited(ip)) {
    return fail(429, "Too many requests. Please try again later.");
  }

  const firstName = asTrimmedString(body.firstName);
  const lastName = asTrimmedString(body.lastName);
  const email = asTrimmedString(body.email);
  const phone = asTrimmedString(body.phone ?? "");
  const message = asTrimmedString(body.message);

  if (!firstName || !lastName || !email || !message || phone === null) {
    return fail(400, "Missing required fields");
  }

  if (
    firstName.length > FIELD_LIMITS.firstName ||
    lastName.length > FIELD_LIMITS.lastName ||
    email.length > FIELD_LIMITS.email ||
    phone.length > FIELD_LIMITS.phone ||
    message.length > FIELD_LIMITS.message
  ) {
    return fail(400, "One or more fields are too long");
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return fail(400, "Invalid email address");
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form error: RESEND_API_KEY is not set");
    return fail(500, "Failed to send message");
  }

  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  try {
    const resend = new Resend(apiKey);
    const { error: sendError } = await resend.emails.send({
      from: "MCL Website <no-reply@multilegalconsultancy.com>",
      to: ["adv.tanimarahman@gmail.com"], // where you want to receive inquiries
      replyTo: email,
      subject: toHeaderText(
        `New Consultation Request from ${firstName} ${lastName}`,
      ),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2d1c0d; padding: 24px; text-align: center;">
            <h1 style="color: #c57b57; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">
              New Website Inquiry
            </h1>
          </div>
          <div style="padding: 24px; background-color: #f8f9fa;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #2d1c0d;">${safeFirstName} ${safeLastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #2d1c0d;">${safeEmail}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; color: #2d1c0d;">${safePhone}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background-color: #ffffff; border-left: 4px solid #c57b57;">
              <p style="margin: 0; color: #666; font-weight: bold; margin-bottom: 8px;">Message:</p>
              <p style="margin: 0; color: #2d1c0d; line-height: 1.6;">${safeMessage}</p>
            </div>
          </div>
          <div style="padding: 16px; text-align: center; background-color: #22150a;">
            <p style="margin: 0; color: #888; font-size: 12px;">
              Sent from the Multilegal Consultancy website contact form
            </p>
          </div>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resend send error:", sendError);
      return fail(502, "Failed to send message");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return fail(500, "Failed to send message");
  }
}
