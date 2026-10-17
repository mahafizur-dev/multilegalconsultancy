import React from "react";
import { SectionHeading } from "../ui/SectionHeading";

export const CorporateClientsSection = () => {
  const clients = [
    "JAT Holdings PLC",
    "Asia Coatings Pvt Ltd",
    "Seaform Bangladesh Pvt Ltd",
    "JAT Holding Bangladesh Pvt Ltd",
    "FLEXO Bangladesh Pvt Ltd",
    "Fortress Venture Ltd",
    "AKH Group",
    "Popular Lub Pvt Ltd.",
  ];

  return (
    <section id="clients" className="py-24 bg-ink text-cream">
      <div className="site-container text-center">
        <SectionHeading
          subtitle="Trusted By"
          title="Our Current"
          highlight="Corporate Clients"
          tone="dark"
        />

        <div
          data-reveal
          className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto border-l border-t border-cream/15"
        >
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="border-r border-b border-cream/15 p-6 flex items-center justify-center text-center min-h-[120px] transition-colors hover:bg-ink-800 group"
            >
              <span className="font-serif text-cream/80 group-hover:text-accent transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>

        <p
          data-reveal
          className="font-serif text-2xl md:text-4xl text-cream/90 leading-snug max-w-3xl mx-auto mt-20"
        >
          &ldquo;We make sure that our clients can put their trust in our
          work.&rdquo;
        </p>
      </div>
    </section>
  );
};
