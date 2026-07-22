// lib/navigation.ts
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Practices", href: "#practices" },
  { label: "Our Team", href: "#team" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];
