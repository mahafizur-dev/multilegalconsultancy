import React from "react";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { revealDelay } from "@/lib/motion";

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
    <section className="py-24 bg-ink text-cream">
      <div className="site-container">
        <SectionHeading
          subtitle="Global Reach"
          title="Foreign Investment &"
          highlight="Corporate Advisory"
          tone="dark"
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10">
          {advisoryServices.map((item, idx) => (
            <div
              key={idx}
              data-reveal
              style={revealDelay(idx, 2, 100)}
              className="flex gap-4 items-start py-5 border-b border-cream/10 group"
            >
              <CheckCircle
                strokeWidth={1.5}
                className="shrink-0 w-6 h-6 text-accent mt-0.5 group-hover:scale-110 transition-transform"
              />
              <p className="text-cream/75 leading-relaxed text-[15px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
