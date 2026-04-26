import React from "react";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export const ForeignInvestmentAdvisory = () => {
  const advisoryServices = [
    "Guiding international corporations on the legal, regulatory, and tax implications of conducting business in Bangladesh.",
    "Organizing and establishing operations in Bangladesh, which includes securing necessary approvals.",
    "Setting up liaison and branch offices in Bangladesh.",
    "Providing counsel to foreign entities on legal and regulatory matters.",
    "Structuring, drafting, and negotiating a variety of commercial and business agreements, such as those for employment, consultancy, confidentiality, services, strategic partnerships, distribution, franchising, marketing, teaming, joint ventures, technology licensing, reseller, and consortium arrangements.",
    "Ensuring compliance with commercial regulations, including property and labor laws.",
    "Handling corporate restructuring, mergers, capital structuring, liquidation, and the repatriation of funds.",
    "Assisting with obtaining work permits and other immigration-related services.",
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Global Reach"
          title="Foreign Investment & Corporate Advisory"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {advisoryServices.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start bg-[#f8f9fa] p-5 rounded-sm hover:shadow-sm transition-shadow group border border-gray-100"
            >
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-[#c39b65] mt-0.5 group-hover:scale-110 transition-transform" />
              <p className="text-gray-600 leading-relaxed text-sm text-justify">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
