import React from "react";
import { SectionHeading } from "../ui/SectionHeading";

export const AttorneysSection = () => {
  const attorneys = [
    {
      name: "Tanima Rahman",
      role: "Managing Partner",
      desc: "Advocate, Supreme Court",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217337/multilegalconsultancy/cbxykopqqkemelmpujm9.jpg",
    },
    {
      name: "Layla Salma Banu",
      role: "Senior Partner",
      desc: "Senior District & Sessions Judge (Rtd.)",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217337/multilegalconsultancy/foy6wpmucfoxeji177yd.jpg",
    },
    {
      name: "Md. Mojibur Rahman",
      role: "Advisor",
      desc: "Joint Secretary (Rtd.)",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217337/multilegalconsultancy/giiaufchcghunntujv8d.jpg",
    },
    {
      name: "Md. Mazaharul Islam Khan",
      role: "Partner",
      desc: "VAT & Tax Consultant",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217337/multilegalconsultancy/yngwlfttfi2qjsvdovjg.jpg",
    },
    {
      name: "Ashique Iqbal",
      role: "Advocate",
      desc: "Bachelor of Laws (RU)",
      img: "[https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80)",
    },
    {
      name: "T.M. Ashikur Rahman",
      role: "VAT & Tax Consultant",
      desc: "Income Tax Practitioner (ITP)",
      img: "[https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80)",
    },
    {
      name: "Md. Imdadul Haque Shamim",
      role: "Advocate",
      desc: "Supreme Court of Bangladesh",
      img: "[https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80](https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80)",
    },
    {
      name: "Noshin Layla Mithi",
      role: "Legal Researcher",
      desc: "Bachelor of Laws",
      img: "[https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=400&q=80](https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=400&q=80)",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Dedicated Professionals" title="Our Team" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attorneys.map((lawyer, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden bg-gray-50 shadow-sm border border-gray-100 rounded-sm"
            >
              <img
                src={lawyer.img}
                alt={lawyer.name}
                className="w-full h-72 object-cover object-top "
              />
              <div className="p-5 bg-white text-center border-t border-[#c39b65]/20 group-hover:border-[#c39b65] transition-colors">
                <h3 className="text-[#222429] font-bold uppercase text-sm mb-1">
                  {lawyer.name}
                </h3>
                <p className="text-[#c39b65] text-xs font-semibold mb-2 uppercase tracking-wide">
                  {lawyer.role}
                </p>
                <p className="text-gray-500 text-[11px] h-8">{lawyer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
