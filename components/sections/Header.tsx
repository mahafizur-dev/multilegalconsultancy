"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/navigation";
import { LOGO_URL } from "@/lib/brand";
import { ButtonLink } from "../ui/Button";

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

  // Highlight the nav link for the section crossing the middle of the viewport.
  // Sections without a nav link (e.g. Managing Partner) keep the previous one lit.
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector<HTMLElement>(link.href),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed left-0 z-50 w-full bg-ink transition-all duration-300 ${
        isScrolled
          ? "top-0 shadow-lg shadow-black/30"
          : "top-0 md:top-8 border-b border-cream/10"
      }`}
    >
      <div
        className={`site-container flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4 md:py-5"
        }`}
      >
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src={LOGO_URL}
            alt="MCL Multilegal Consultancy"
            width={600}
            height={111}
            priority
            className={`w-auto transition-all duration-300 ${
              isScrolled ? "h-9 md:h-10" : "h-10 md:h-12"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-[15px] text-cream lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-2 transition-colors hover:text-accent after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive ? "text-accent after:scale-x-100" : "after:scale-x-0"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ButtonLink href="#contact" variant="light" className="ml-2">
            Book a Consultation
          </ButtonLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className="-mr-2 p-2 text-cream transition-colors hover:text-accent lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`flex flex-col overflow-hidden bg-ink text-cream transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-[32rem] border-t border-cream/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        {NAV_LINKS.map((link) => {
          const isActive = link.href === activeHref;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              aria-current={isActive ? "location" : undefined}
              className={`border-b border-l-2 border-b-cream/5 px-4 py-4 transition-colors hover:bg-cream/5 hover:text-accent ${
                isActive ? "border-l-accent text-accent" : "border-l-transparent"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="p-4">
          <ButtonLink
            href="#contact"
            variant="light"
            onClick={closeMenu}
            className="w-full"
          >
            Book a Consultation
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
};
