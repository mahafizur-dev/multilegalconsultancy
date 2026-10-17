import React from "react";
import Link from "next/link";

type Variant = "light" | "dark" | "outline";

const baseStyle =
  "inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-300";

const variants: Record<Variant, string> = {
  light: "bg-cream text-ink hover:bg-accent",
  dark: "bg-ink text-cream hover:bg-accent-600",
  outline: "border border-cream/40 text-cream hover:border-accent hover:text-accent",
};

const buttonClass = (variant: Variant, rounded: boolean, className: string) =>
  `${baseStyle} ${variants[variant]} ${rounded ? "rounded-full" : ""} ${className}`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  rounded?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "dark",
  rounded = false,
  className = "",
  ...props
}) => (
  <button className={buttonClass(variant, rounded, className)} {...props}>
    {children}
  </button>
);

interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
  variant?: Variant;
  rounded?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  variant = "dark",
  rounded = false,
  className = "",
  ...props
}) => (
  <Link className={buttonClass(variant, rounded, className)} {...props}>
    {children}
  </Link>
);
