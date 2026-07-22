"use client";

import React, { useEffect, useState } from "react";
import { Phone, Clock } from "lucide-react";

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
      className={`fixed left-0 top-0 z-[60] hidden w-full bg-[#222429] py-2 text-sm text-gray-300 transition-all duration-300 md:block ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-[#c39b65]" /> +8801307289692
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-[#c39b65]" /> Sun - Thu : 9:00
            AM - 6:00 PM
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:text-[#c39b65] cursor-pointer"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:text-[#c39b65] cursor-pointer"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};
