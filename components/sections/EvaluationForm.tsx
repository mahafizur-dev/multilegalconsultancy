"use client";

import React, { useState } from "react";
import { BookOpen, Loader2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";
import contactImage from "@/public/1.jpeg";

export const EvaluationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot: left blank by real users, hidden from view
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative flex flex-col bg-cream overflow-hidden lg:block">
      {/* Form Side */}
      <div className="site-container order-2 py-16 lg:py-24">
        <div data-reveal className="max-w-md lg:w-1/2 lg:max-w-none lg:pr-16 text-ink">
          <p className="text-accent-600 font-semibold tracking-[0.25em] uppercase mb-4 text-xs flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-5">
            Contact <span className="text-accent">Us</span>
          </h2>
          <p className="text-ink/70 mb-10">
            Contact us if you think we can assist you with your legal or
            taxation matters.
          </p>

          {status === "success" ? (
            <div className="flex items-center gap-3 bg-ink text-cream p-5 text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
              Thank you! Your message has been sent. We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] w-px h-px overflow-hidden"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-white border border-ink/15 px-4 py-3.5 w-full text-ink placeholder:text-taupe/80 focus:border-accent-600 outline-none transition-colors"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-white border border-ink/15 px-4 py-3.5 w-full text-ink placeholder:text-taupe/80 focus:border-accent-600 outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border border-ink/15 px-4 py-3.5 w-full text-ink placeholder:text-taupe/80 focus:border-accent-600 outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white border border-ink/15 px-4 py-3.5 w-full text-ink placeholder:text-taupe/80 focus:border-accent-600 outline-none transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="How can we assist you?"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white border border-ink/15 px-4 py-3.5 w-full text-ink placeholder:text-taupe/80 focus:border-accent-600 outline-none transition-colors"
              ></textarea>

              {status === "error" && (
                <p className="text-red-700 text-sm">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                rounded
                className="w-full sm:w-auto px-9 py-4 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Image Side */}
      <div
        data-reveal="right"
        className="order-1 flex items-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <Image
          src={contactImage}
          alt="Multilegal Consultancy lawyers reviewing a case"
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};
