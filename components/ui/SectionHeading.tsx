import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  alignment?: "center" | "left";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = "center",
}) => (
  <div
    className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"}`}
  >
    <h4 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-2">
      {subtitle}
    </h4>
    <h2 className="text-3xl md:text-4xl font-bold text-[#222429] uppercase">
      {title}
    </h2>
    <div
      className={`w-16 h-1 bg-[#c39b65] mt-4 ${alignment === "center" ? "mx-auto" : ""}`}
    ></div>
  </div>
);
