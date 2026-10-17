import React from "react";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { revealDelay } from "@/lib/motion";

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
    <section id="team" className="py-24 bg-sand">
      <div className="site-container">
        <SectionHeading
          subtitle="Dedicated Professionals"
          title="Our"
          highlight="Team"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attorneys.map((lawyer, idx) => (
            <div
              key={idx}
              data-reveal
              style={revealDelay(idx)}
              className="group flex flex-col"
            >
              <div className="relative h-72 overflow-hidden bg-cream">
                <Image
                  src={lawyer.img}
                  alt={lawyer.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 mt-2 p-6 bg-ink text-center transition-colors duration-300 group-hover:bg-ink-800">
                <h3 className="font-serif text-cream uppercase tracking-wide mb-2">
                  {lawyer.name}
                </h3>
                <p className="text-accent text-xs font-semibold mb-2 uppercase tracking-[0.15em]">
                  {lawyer.role}
                </p>
                <p className="text-cream/65 text-sm">{lawyer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
