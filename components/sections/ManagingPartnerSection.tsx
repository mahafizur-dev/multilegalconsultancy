import React from "react";
import Image from "next/image";
import { Scale, GraduationCap, Briefcase } from "lucide-react";

export const ManagingPartnerSection = () => (
  <section className="py-20 bg-white overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Image Side */}
        <div className="lg:w-2/5 w-full flex justify-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c39b65] -z-10"></div>
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] overflow-hidden bg-gray-100">
              <Image
                src="https://res.cloudinary.com/dpnehdjkx/image/upload/v1784863591/g1k3nflrk92htmhipifb.jpg"
                alt="Tanima Rahman - Managing Partner"
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Bio Side */}
        <div className="lg:w-3/5 w-full">
          <h4 className="text-[#c39b65] font-bold tracking-widest uppercase mb-2 text-sm">
            Meet Our Managing Partner
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#222429] uppercase border-l-4 border-[#c39b65] pl-4 leading-tight mb-6">
            Tanima Rahman
          </h2>

          <p className="text-gray-600 leading-relaxed text-justify mb-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Scale className="w-6 h-6 text-[#c39b65] shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-[#222429] text-sm uppercase mb-1">
                  Advocate
                </h5>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Supreme Court of Bangladesh
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-[#c39b65] shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-[#222429] text-sm uppercase mb-1">
                  Education
                </h5>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Dual Master&apos;s, Australia
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-6 h-6 text-[#c39b65] shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-[#222429] text-sm uppercase mb-1">
                  Experience
                </h5>
                <p className="text-gray-500 text-xs leading-relaxed">
                  10+ Years in Practice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
