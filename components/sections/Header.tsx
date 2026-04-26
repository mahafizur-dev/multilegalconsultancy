"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 md:top-10 z-50 bg-black/50 border-b border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo Section (Adjusted) */}
        <div className="flex items-center text-white">
          <img
            src="https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217337/multilegalconsultancy/h9vf6epf8ojwdbqlu4ii.jpg"
            alt="MCL Multilegal Consultancy"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-white text-sm font-semibold uppercase tracking-wider">
          <a href="#" className="text-[#c39b65]">
            Home
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            Practices
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            Our Team
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            Clients
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-[#c39b65] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-[#222429] p-4 flex flex-col space-y-4 text-white text-sm uppercase tracking-wider font-semibold border-t border-gray-800">
          <a href="#" className="text-[#c39b65]">
            Home
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            Practices
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            Our Team
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            Clients
          </a>
          <a href="#" className="hover:text-[#c39b65] transition-colors">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};
