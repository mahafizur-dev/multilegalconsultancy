"use client";

import React, { useEffect, useRef, useState } from "react";

// Keep these in step with the Team, Practice Areas and Clients sections.
const stats = [
  { value: 10, suffix: "+", label: "Years in Practice" },
  { value: 8, suffix: "", label: "Legal & Tax Professionals" },
  { value: 12, suffix: "", label: "Practice Areas" },
  { value: 8, suffix: "", label: "Corporate Clients" },
];

const DURATION_MS = 1600;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  // Server HTML carries the final number, so it reads correctly without JS.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    setDisplay(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          setDisplay(Math.round(easeOutCubic(progress) * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} aria-hidden="true" className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

export const StatsSection = () => (
  <section aria-label="Firm at a glance" className="bg-ink-900 text-cream">
    <div className="site-container">
      <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-cream/10">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col-reverse py-10 md:py-12 text-center border-cream/10 ${
              idx % 2 === 1 ? "border-l" : ""
            } ${idx >= 2 ? "border-t lg:border-t-0" : ""} ${
              idx === 2 ? "lg:border-l" : ""
            }`}
          >
            {/* dt precedes dd in the markup; flex-col-reverse shows the number first. */}
            <dt className="text-xs md:text-sm uppercase tracking-[0.18em] text-cream/70 px-2">
              {stat.label}
            </dt>
            <dd className="font-serif text-4xl md:text-5xl text-accent mb-3">
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="sr-only">
                {stat.value}
                {stat.suffix}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
