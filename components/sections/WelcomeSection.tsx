import React from "react";
import { Building2, Landmark, Scale } from "lucide-react";

export const WelcomeSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row mb-16 gap-12 items-center">
          <div className="lg:w-5/12">
            <h4 className="text-[#c39b65] font-bold tracking-widest uppercase mb-2 text-sm">
              Welcome to MCL
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#222429] uppercase border-l-4 border-[#c39b65] pl-4 leading-tight">
              A Multidisciplinary <br /> Legal Team
            </h2>
          </div>
          <div className="lg:w-7/12 text-gray-600 leading-relaxed text-justify">
            <p className="mb-4">
              We are a full-service law firm stationed in Dhaka, Bangladesh. Our
              team comprises experienced foreign-trained lawyers, accountants,
              retired judges, and retired high-level government officials of
              Bangladesh.
            </p>
            <p>
              Our multidisciplinary team can think out of the box and assist
              clients in finding the best possible commercially viable legal
              solutions for their business organizations. At Multilegal
              Consultancy, we value client's satisfaction and make sure that our
              clients can put their trust in our work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f8f9fa] p-8 border-b-4 border-[#c39b65] hover:shadow-lg transition-all group">
            <Building2 className="w-12 h-12 text-[#c39b65] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-[#222429] mb-3 uppercase">
              Corporate Advisory
            </h3>
            <p className="text-gray-500 text-sm">
              Comprehensive legal advisory, retainership, and company
              secretarial services for national and multinational companies.
            </p>
          </div>
          <div className="bg-[#f8f9fa] p-8 border-b-4 border-[#c39b65] hover:shadow-lg transition-all group">
            <Landmark className="w-12 h-12 text-[#c39b65] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-[#222429] mb-3 uppercase">
              Taxation & VAT
            </h3>
            <p className="text-gray-500 text-sm">
              Expert guidance on corporate taxation, VAT compliance, customs
              regulations, and financial law by qualified accountants.
            </p>
          </div>
          <div className="bg-[#f8f9fa] p-8 border-b-4 border-[#c39b65] hover:shadow-lg transition-all group">
            <Scale className="w-12 h-12 text-[#c39b65] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-[#222429] mb-3 uppercase">
              Litigation & Dispute
            </h3>
            <p className="text-gray-500 text-sm">
              Representation in commercial litigation, appeal, writ, and
              domestic & international arbitration tribunals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
