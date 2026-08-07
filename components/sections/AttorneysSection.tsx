import React from "react";
import { SectionHeading } from "../ui/SectionHeading";

export const AttorneysSection = () => {
  const attorneys = [
    {
      name: "Tanima Rahman",
      role: "Managing Partner",
      desc: "Advocate, Supreme Court of Bangladesh",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217337/multilegalconsultancy/cbxykopqqkemelmpujm9.jpg",
    },
    {
      name: "Layla Salma Banu",
      role: "Senior Partner",
      desc: "Advocate, Supreme Court of Bangladesh",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217337/multilegalconsultancy/foy6wpmucfoxeji177yd.jpg",
    },
    {
      name: "Md. Mojibur Rahman",
      role: "Advisor",
      desc: "Retired Additional Secretary",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217337/multilegalconsultancy/giiaufchcghunntujv8d.jpg",
    },
    {
      name: "Md. Mazaharul Islam Khan",
      role: "Partner",
      desc: "Income Tax Consultant",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1784865602/p5wgvi1gpgoeh6l3bm2b.jpg",
    },
    {
      name: "Ashique Iqbal",
      role: "Advocate",
      desc: "Bachelor of Laws (RU)",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1786081956/jb7aajqfynaad3ororom.jpg",
    },
    {
      name: "T.M. Ashikur Rahman",
      role: "Income Tax Consultant",
      desc: "Income Tax Practitioner (ITP)",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1786082684/gcc5ucbcfsofghyxft6s.jpg",
    },
    {
      name: "Md. Imdadul Haque Shamim",
      role: "Advocate",
      desc: "Supreme Court of Bangladesh",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1786082683/i08cjrpa4cb4cbkp2qvc.jpg",
    },
    {
      name: "Noshin Layla Mithi",
      role: "Legal Researcher",
      desc: "Bachelor of Laws",
      img: "https://res.cloudinary.com/dpnehdjkx/image/upload/v1786081956/nxwz49fbijhnus998z0x.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
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
