import React from "react";
import Image from "next/image";
import { Scale, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import {
  EMAIL,
  LINKEDIN_URL,
  LOGO_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/brand";
import { revealDelay } from "@/lib/motion";

export const Footer = () => (
  <footer className="bg-ink-900 text-cream/70 pt-20 pb-24">
    <div className="site-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1 */}
        <div data-reveal className="lg:pr-6">
          <div className="flex items-center mb-6">
            <Image
              src={LOGO_URL}
              alt="MCL Multilegal Consultancy"
              width={600}
              height={111}
              sizes="240px"
              className="h-10 md:h-11 w-auto"
            />
          </div>
          <p className="text-sm mb-6 leading-relaxed">
            Multilegal Consultancy is a Corporate & Taxation Law Firm stationed
            in Dhaka, Bangladesh. We make sure that our clients can put their
            trust in our work.
          </p>
          <div className="flex space-x-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tanima Rahman on LinkedIn"
              className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-ink transition rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div data-reveal style={revealDelay(1)}>
          <h3 className="font-serif text-cream text-lg mb-6">
            Quick Links
          </h3>
          <ul className="text-sm">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Our Team", href: "#team" },
              { label: "Corporate Clients", href: "#clients" },
              { label: "Contact Us", href: "#contact" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-accent flex items-center py-1.5"
                >
                  <ChevronRight size={14} className="mr-1 text-accent" />{" "}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div data-reveal style={revealDelay(2)}>
          <h3 className="font-serif text-cream text-lg mb-6">
            Practice Areas
          </h3>
          <ul className="text-sm">
            {[
              "Corporate Law & RJSC",
              "Taxation, VAT & Customs",
              "Foreign Direct Investment",
              "Commercial Litigation",
              "Intellectual Property",
              "Labour & Employment",
            ].map((link, i) => (
              <li key={i}>
                <a
                  href="#practices"
                  className="hover:text-accent flex items-center py-1.5"
                >
                  <ChevronRight size={14} className="mr-1 text-accent" />{" "}
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div data-reveal style={revealDelay(3)}>
          <h3 className="font-serif text-cream text-lg mb-6">
            Get In Touch
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong>Office:</strong> Q-10, Baily Ritz Apartment, 1 New Baily
                Road, Dhaka- 1000
              </span>
            </li>
            <li className="flex items-start">
              <Scale className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong>Court Chamber:</strong> Hall No. 1, Supreme Court Bar
                Association Building, Dhaka, Bangladesh
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-accent mr-3 shrink-0" />
              <span>
                <a href={PHONE_TEL} className="hover:text-accent">
                  {PHONE_DISPLAY}
                </a>{" "}
                (Cell/
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent underline decoration-cream/30 underline-offset-2"
                >
                  WhatsApp
                </a>
                )
              </span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-accent mr-3 shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-accent break-all">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} Multilegal Consultancy (MCL). All
          Rights Reserved.
        </p>
        <p className="mt-4 md:mt-0">Dhaka, Bangladesh</p>
      </div>
    </div>
  </footer>
);
