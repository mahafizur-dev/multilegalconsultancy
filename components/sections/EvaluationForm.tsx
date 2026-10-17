"use client";

import React, { useState } from "react";
import { BookOpen, Loader2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";
import contactImage from "@/public/1.jpeg";
import { FIELD_LIMITS } from "@/lib/contact";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  website: "", // honeypot: left blank by real users, hidden from view
};

const inputClass =
  "bg-white border border-ink/15 px-4 py-3.5 w-full text-ink placeholder:text-taupe/70 focus:border-accent-600 outline-none transition-colors";

const Label = ({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-ink mb-1.5">
    {children}
    {optional ? (
      <span className="ml-1 font-normal text-taupe">(optional)</span>
    ) : (
      <span aria-hidden="true" className="ml-0.5 text-accent-600">
        *
      </span>
    )}
  </label>
);

export const EvaluationForm = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

      if (!res.ok) {
        setErrorMessage(
          res.status === 429
            ? "You've sent several messages recently. Please wait a few minutes, or call us directly."
            : "Something went wrong. Please try again or call us directly.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData(EMPTY_FORM);
    } catch {
      setErrorMessage(
        "We couldn't reach the server. Please check your connection or call us directly.",
      );
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
            <div
              role="status"
              className="flex items-center gap-3 bg-ink text-cream p-5 text-sm"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
              Thank you! Your message has been sent. We&apos;ll get back to you
              soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="contact-first-name">First name</Label>
                  <input
                    id="contact-first-name"
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    maxLength={FIELD_LIMITS.firstName}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-last-name">Last name</Label>
                  <input
                    id="contact-last-name"
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    maxLength={FIELD_LIMITS.lastName}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    maxLength={FIELD_LIMITS.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone" optional>
                    Phone
                  </Label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+880"
                    maxLength={FIELD_LIMITS.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="contact-message">How can we assist you?</Label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Briefly describe your legal or tax matter"
                  maxLength={FIELD_LIMITS.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={inputClass}
                ></textarea>
              </div>

              <p className="text-xs text-taupe">
                <span aria-hidden="true" className="text-accent-600">
                  *
                </span>{" "}
                Required fields
              </p>

              {status === "error" && (
                <p role="alert" className="text-red-700 text-sm">
                  {errorMessage}
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
