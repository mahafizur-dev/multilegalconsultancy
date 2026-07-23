import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export const HeroSection = () => (
  <section
    id="home"
    className="relative h-screen flex items-center justify-center text-center"
  >
    <div
      className="absolute inset-0 bg-cover bg-top"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dpnehdjkx/image/upload/v1777217338/multilegalconsultancy/rhhemj5jnu1nlevuutc2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#1a1f24]/85"></div>
    </div>

    <div className="relative z-10 px-4 max-w-4xl mt-20">
      <h4 className="text-[#c39b65] font-semibold tracking-[0.3em] uppercase mb-4">
        A Corporate & Taxation Law Firm
      </h4>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-widest mb-6 drop-shadow-lg leading-tight">
        Where you can <br /> put your trust
      </h1>
      <p className="text-gray-300 mb-10 md:text-lg max-w-2xl mx-auto leading-relaxed">
        We are a full-service law firm stationed in Dhaka, Bangladesh providing
        a one-stop-service to national and multinational companies.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="#contact">
          <Button variant="primary">Consult With Us</Button>
        </Link>
        <Link href="#practices">
          <Button variant="outline">
            Explore Services <ArrowRight className="inline w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
