"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/navigation";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "top-0 bg-[#1a1f24]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "top-0 md:top-10 bg-black/30 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center text-white"
          onClick={closeMenu}
        >
          <Image
            src="https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217337/multilegalconsultancy/h9vf6epf8ojwdbqlu4ii.jpg"
            alt="MCL Multilegal Consultancy"
            width={160}
            height={80}
            priority
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? "h-10 md:h-14" : "h-12 md:h-20"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center space-x-8 text-sm font-semibold uppercase tracking-wider text-white lg:flex"
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 transition-colors hover:text-[#c39b65] ${
                i === 0 ? "text-[#c39b65]" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#c39b65] after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className="text-white transition-colors hover:text-[#c39b65] lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`flex flex-col overflow-hidden bg-[#1a1f24] text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-96 border-t border-white/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={`border-b border-white/5 px-4 py-4 transition-colors hover:bg-white/5 hover:text-[#c39b65] ${
              i === 0 ? "text-[#c39b65]" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
