import React from "react";
import { Scale, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export const Footer = () => (
  <footer className="bg-[#1c1e22] text-gray-400 pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1 */}
        <div className="lg:pr-6">
          <div className="flex items-center text-white mb-6">
            <img
              src="/image_47fca0.png"
              alt="MCL Multilegal Consultancy"
              className="h-10 md:h-12 object-contain"
            />
          </div>
          <p className="text-sm mb-6 leading-relaxed">
            Multilegal Consultancy is a Corporate & Taxation Law Firm stationed
            in Dhaka, Bangladesh. We make sure that our clients can put their
            trust in our work.
          </p>
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center hover:bg-[#c39b65] hover:text-white transition cursor-pointer rounded">
              <svg
                xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center hover:bg-[#c39b65] hover:text-white transition cursor-pointer rounded">
              <svg
                xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
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
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About Us",
              "Our Team",
              "Corporate Clients",
              "Contact Us",
            ].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#c39b65] flex items-center">
                  <ChevronRight size={14} className="mr-1 text-[#c39b65]" />{" "}
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 uppercase">
            Practice Areas
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Corporate Law & RJSC",
              "Taxation, VAT & Customs",
              "Foreign Direct Investment",
              "Commercial Litigation",
              "Intellectual Property",
              "Labour & Employment",
            ].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#c39b65] flex items-center">
                  <ChevronRight size={14} className="mr-1 text-[#c39b65]" />{" "}
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 uppercase">
            Get In Touch
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-[#c39b65] mr-3 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong>Office:</strong> Q-10, Baily Ritz Apartment, 1 New Baily
                Road, Dhaka- 1000
              </span>
            </li>
            <li className="flex items-start">
              <Scale className="w-5 h-5 text-[#c39b65] mr-3 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong>Court Chamber:</strong> Hall No. 1, Supreme Court Bar
                Association Building, Dhaka, Bangladesh
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-[#c39b65] mr-3 shrink-0" />
              <span>+8801307289692 (Cell/WhatsApp)</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-[#c39b65] mr-3 shrink-0" />
              <span>info@multilegalconsultancy.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} Multilegal Consultancy (MCL). All
          Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);
