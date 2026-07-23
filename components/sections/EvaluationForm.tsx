"use client";

import React, { useState } from "react";
import { BookOpen, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";

export const EvaluationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
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
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="flex flex-col lg:flex-row w-full">
      {/* Form Side */}
      <div className="bg-[#f8f9fa] p-10 lg:p-20 lg:w-1/2 flex justify-end order-2 lg:order-1 border-t border-gray-200">
        <div className="max-w-md w-full text-[#222429]">
          <h2 className="text-3xl font-bold uppercase mb-4 flex items-center">
            <BookOpen className="mr-3 text-[#c39b65]" /> Contact Us
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Contact us if you think we can assist you with your legal or
            taxation matters.
          </p>

          {status === "success" ? (
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 p-4 rounded-sm text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              Thank you! Your message has been sent. We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
                />
              </div>
              <textarea
                name="message"
                placeholder="How can we assist you?"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
              ></textarea>

              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto"
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
        className="lg:w-1/2 h-80 lg:h-auto bg-cover bg-center order-1 lg:order-2"
        style={{ backgroundImage: "url('/image_47ffdd.jpg')" }}
      >
        <div className="w-full h-full bg-[#c39b65]/20 mix-blend-multiply"></div>
      </div>
    </section>
  );
};
