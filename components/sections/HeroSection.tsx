import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import heroImage from "@/public/2.jpeg";
import { enterDelay } from "@/lib/motion";

export const HeroSection = () => (
  <section
    id="home"
    className="relative bg-ink text-cream overflow-hidden lg:flex lg:items-center lg:min-h-[100dvh]"
  >
    {/* Copy */}
    <div className="site-container pt-36 pb-16 lg:pt-40 lg:pb-24">
      <div className="max-w-xl lg:w-1/2 lg:pr-12">
        <p
          className="hero-enter text-accent font-semibold tracking-[0.25em] uppercase mb-6 text-xs"
          style={enterDelay(100)}
        >
          A Corporate &amp; Taxation Law Firm
        </p>
        <h1
          className="hero-enter font-serif text-4xl sm:text-5xl xl:text-6xl leading-[1.15] mb-8"
          style={enterDelay(250)}
        >
          Where you can put your{" "}
          <span className="hero-underline">
            trust.
          </span>
        </h1>
        <p
          className="hero-enter text-cream/75 mb-10 text-base md:text-lg leading-relaxed"
          style={enterDelay(450)}
        >
          We are a full-service law firm stationed in Dhaka, Bangladesh
          providing a one-stop-service to national and multinational companies.
        </p>
        <div
          className="hero-enter flex flex-col sm:flex-row sm:items-center gap-6"
          style={enterDelay(600)}
        >
          <ButtonLink href="#contact" variant="light" rounded className="px-9 py-4">
            Consult With Us
          </ButtonLink>
          <Link
            href="#practices"
            className="group inline-flex items-center gap-2 py-2 text-sm text-cream/85 hover:text-accent transition-colors"
          >
            Explore Services{" "}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>

    {/* Image */}
    <div className="flex items-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:pt-28 lg:pb-12">
      <Image
        src={heroImage}
        alt="The Multilegal Consultancy team"
        priority
        placeholder="blur"
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="hero-image-enter w-full h-auto"
      />
    </div>
  </section>
);
