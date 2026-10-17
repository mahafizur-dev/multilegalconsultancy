"use client";

import React, { useEffect, useState } from "react";
import { Phone, Clock } from "lucide-react";
import { LINKEDIN_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/brand";

export const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 z-[60] hidden w-full bg-ink-900 py-2 text-xs text-cream/70 transition-all duration-300 md:block ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a href={PHONE_TEL} className="flex items-center hover:text-accent">
            <Phone className="w-3.5 h-3.5 mr-2 text-accent" /> {PHONE_DISPLAY}
          </a>
          <span className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-2 text-accent" /> Sun - Thu : 9:00
            AM - 6:00 PM
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tanima Rahman on LinkedIn"
            className="p-1 -m-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:text-accent cursor-pointer"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
