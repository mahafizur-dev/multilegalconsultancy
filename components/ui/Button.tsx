import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "dark";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 font-semibold transition-all duration-300 text-sm uppercase tracking-wider";
  const variants = {
    primary: "bg-[#c39b65] text-white hover:bg-yellow-700",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-[#222429]",
    dark: "bg-[#222429] text-white hover:bg-gray-800",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
