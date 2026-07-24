"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const BACKGROUND_IMAGES = [
  "https://res.cloudinary.com/dpnehdjkx/image/upload/f_auto,q_auto,w_1920/v1777217338/multilegalconsultancy/rhhemj5jnu1nlevuutc2.jpg",
  "https://res.cloudinary.com/dpnehdjkx/image/upload/f_auto,q_auto,w_1920/v1784863590/s0qisxvkaz54bcskefj0.jpg",
];

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center text-center overflow-hidden"
    >
      {BACKGROUND_IMAGES.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-top transition-opacity duration-[2000ms] ease-in-out ${
            idx === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            animation:
              idx === activeIndex
                ? "heroZoom 8s ease-in-out infinite alternate"
                : "none",
          }}
        >
          <div className="absolute inset-0 bg-[#1a1f24]/85"></div>
        </div>
      ))}

      <div className="relative z-10 px-4 max-w-4xl mt-20 py-10">
        <h4 className="text-[#c39b65] font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 text-xs sm:text-sm">
          A Corporate & Taxation Law Firm
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide sm:tracking-widest mb-6 drop-shadow-lg leading-tight">
          Where you can <br /> put your trust
        </h1>
        <p className="text-gray-300 mb-10 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
          We are a full-service law firm stationed in Dhaka, Bangladesh
          providing a one-stop-service to national and multinational companies.
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

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {BACKGROUND_IMAGES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Show background ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeIndex ? "w-8 bg-[#c39b65]" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
};
