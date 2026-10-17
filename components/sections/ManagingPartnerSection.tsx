import React from "react";
import Image from "next/image";
import { Scale, GraduationCap, Briefcase } from "lucide-react";
import partnerImage from "@/public/5.jpeg";

const credentials = [
  { icon: Scale, title: "Advocate", desc: "Supreme Court of Bangladesh" },
  { icon: GraduationCap, title: "Education", desc: "Dual Master's, Australia" },
  { icon: Briefcase, title: "Experience", desc: "10+ Years in Practice" },
];

export const ManagingPartnerSection = () => (
  <section className="py-24 bg-sand overflow-hidden">
    <div className="site-container">
      <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
        {/* Image Side */}
        <div
          data-reveal="left"
          className="lg:w-2/5 w-full flex justify-center lg:justify-start pr-4"
        >
          <div className="relative w-full max-w-72 sm:max-w-80 md:max-w-96">
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-ink"></div>
            <div className="relative w-full bg-cream">
              <Image
                src={partnerImage}
                alt="Tanima Rahman - Managing Partner"
                placeholder="blur"
                sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Bio Side */}
        <div
          data-reveal="right"
          style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
          className="lg:w-3/5 w-full"
        >
          <p className="text-accent-600 font-semibold tracking-[0.25em] uppercase mb-4 text-xs">
            Meet Our Managing Partner
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink leading-tight mb-8">
            Tanima <span className="text-accent">Rahman</span>
          </h2>

          <p className="text-ink/75 leading-relaxed text-lg mb-10">
            Tanima Rahman is an Advocate of the Supreme Court of Bangladesh,
            holding dual Master&apos;s degrees in International Trade Law and
            Accounting from Australia. With over a decade of professional
            experience, she specializes in corporate governance, company law,
            employment and labour law, commercial litigation, tax, VAT and
            customs disputes, and cross-border regulatory compliance. Combining
            legal and financial expertise, she delivers practical, commercially
            focused solutions that help businesses navigate complex regulatory
            environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-ink/15 pt-8">
            {credentials.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon
                  strokeWidth={1.5}
                  className="w-6 h-6 text-accent-600 shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-serif text-ink mb-1">{title}</h3>
                  <p className="text-taupe text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
