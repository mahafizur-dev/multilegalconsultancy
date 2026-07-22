import React from "react";
import { SectionHeading } from "../ui/SectionHeading";

export const CorporateClientsSection = () => {
  const clients = [
    "JAT Holdings PLC",
    "Asia Coatings Pvt Ltd",
    "Seaform Bangladesh Pvt Ltd",
    "JAT Holding Bangladesh Pvt Ltd",
    "FLEXO Bangladesh Pvt Ltd",
    "Fotress Venture Ltd",
    "AKH Group",
    "Popular Lub Pvt Ltd.",
  ];

  return (
    <section id="clients" className="py-20 bg-[#222429] text-white">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading
          subtitle="Trusted By"
          title="Our Current Corporate Clients"
          alignment="center"
        />
        <div className="w-16 h-1 bg-[#c39b65] mx-auto mt-[-30px] mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-[#2d3239] border border-gray-700 hover:border-[#c39b65] p-6 flex items-center justify-center text-center transition-colors min-h-[120px] rounded-sm group"
            >
              <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
