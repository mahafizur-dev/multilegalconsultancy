"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/navigation";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-sm md:top-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
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
            className="h-12 w-auto object-contain transition-all duration-300 sm:h-16 md:h-20"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden space-x-8 text-sm font-semibold uppercase tracking-wider text-white lg:flex"
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? "text-[#c39b65]"
                  : "transition-colors hover:text-[#c39b65]"
              }
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
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="flex flex-col space-y-4 border-t border-gray-800 bg-[#222429] p-4 text-sm font-semibold uppercase tracking-wider text-white lg:hidden"
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={
                i === 0
                  ? "text-[#c39b65]"
                  : "transition-colors hover:text-[#c39b65]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
