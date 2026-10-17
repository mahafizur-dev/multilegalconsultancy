import React from "react";

interface SectionHeadingProps {
  title: string;
  /** Trailing word(s) rendered in the accent color. */
  highlight?: string;
  subtitle: string;
  alignment?: "center" | "left";
  tone?: "light" | "dark";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  highlight,
  subtitle,
  alignment = "center",
  tone = "light",
}) => {
  const onDark = tone === "dark";
  return (
    <div
      data-reveal
      className={`mb-14 ${alignment === "center" ? "text-center" : "text-left"}`}
    >
      <p
        className={`uppercase tracking-[0.25em] text-xs font-semibold mb-4 ${
          onDark ? "text-accent" : "text-accent-600"
        }`}
      >
        {subtitle}
      </p>
      <h2
        className={`font-serif text-3xl md:text-5xl leading-tight ${
          onDark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
        {highlight && <span className="text-accent"> {highlight}</span>}
      </h2>
    </div>
  );
};
