import React from "react";
import { Building2, Landmark, Scale } from "lucide-react";
import { revealDelay } from "@/lib/motion";

const pillars = [
  {
    icon: Building2,
    title: "Corporate Advisory",
    desc: "Comprehensive legal advisory, retainership, and company secretarial services for national and multinational companies.",
  },
  {
    icon: Landmark,
    title: "Taxation & VAT",
    desc: "Expert guidance on corporate taxation, VAT compliance, customs regulations, and financial law by qualified accountants.",
  },
  {
    icon: Scale,
    title: "Litigation & Dispute",
    desc: "Representation in commercial litigation, appeal, writ, and domestic & international arbitration tribunals.",
  },
];

export const WelcomeSection = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row mb-16 gap-10 lg:gap-16 items-start">
          <div data-reveal className="lg:w-5/12">
            <p className="text-accent-600 font-semibold tracking-[0.25em] uppercase mb-4 text-xs">
              Welcome to MCL
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-ink leading-tight">
              A Multidisciplinary{" "}
              <span className="text-accent">Legal Team</span>
            </h2>
          </div>
          <div
            data-reveal
            style={revealDelay(1, 4, 150)}
            className="lg:w-7/12 text-ink/75 leading-relaxed text-lg space-y-4"
          >
            <p>
              We are a full-service law firm stationed in Dhaka, Bangladesh. Our
              team comprises experienced foreign-trained lawyers, accountants,
              retired judges, and retired high-level government officials of
              Bangladesh.
            </p>
            <p>
              Our multidisciplinary team can think out of the box and assist
              clients in finding the best possible commercially viable legal
              solutions for their business organizations. At Multilegal
              Consultancy, we value client&apos;s satisfaction and make sure that
              our clients can put their trust in our work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} data-reveal style={revealDelay(idx, 3, 120)}>
              <div className="h-full bg-ink text-cream p-10 text-center group transition-all duration-300 hover:bg-ink-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/20">
                <Icon
                  strokeWidth={1.25}
                  className="w-11 h-11 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-serif uppercase tracking-wide text-lg mb-4">
                  {title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
