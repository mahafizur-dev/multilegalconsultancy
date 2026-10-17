// Cloudinary strips the logo's baked-in charcoal background so it sits on any brand color.
export const LOGO_URL =
  "https://res.cloudinary.com/dpnehdjkx/image/upload/e_trim/e_make_transparent:15/f_png/v1777217337/multilegalconsultancy/h9vf6epf8ojwdbqlu4ii.jpg";

// Contact details shown across the site.
export const PHONE_DISPLAY = "+8801307289692";
export const PHONE_TEL = "tel:+8801307289692";
export const EMAIL = "adv.tanimarahman@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/tanima-rahman-3a750a138";

const WHATSAPP_NUMBER = "8801307289692";
const WHATSAPP_GREETING =
  "Hello Multilegal Consultancy, I would like to request a consultation.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;

// Canonical site address for SEO tags, sitemap and social previews.
// Set NEXT_PUBLIC_SITE_URL in the hosting environment if the domain differs.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://multilegalconsultancy.com"
).replace(/\/$/, "");

export const SITE_NAME = "Multilegal Consultancy";
export const SITE_DESCRIPTION =
  "A Corporate & Taxation Law Firm stationed in Dhaka, Bangladesh providing a one-stop-service to national and multinational companies.";
