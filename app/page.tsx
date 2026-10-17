import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { ManagingPartnerSection } from "@/components/sections/ManagingPartnerSection";
import { ForeignInvestmentAdvisory } from "@/components/sections/ForeignInvestmentAdvisory";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { AttorneysSection } from "@/components/sections/AttorneysSection";
import { CorporateClientsSection } from "@/components/sections/CorporateClientsSection";
import { EvaluationForm } from "@/components/sections/EvaluationForm";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  EMAIL,
  LINKEDIN_URL,
  LOGO_URL,
  PHONE_DISPLAY,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/brand";

// Structured data so search engines can show the firm in local results.
const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_NAME,
  alternateName: "MCL",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: LOGO_URL,
  image: `${SITE_URL}/opengraph-image`,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Q-10, Baily Ritz Apartment, 1 New Baily Road",
    addressLocality: "Dhaka",
    postalCode: "1000",
    addressCountry: "BD",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: { "@type": "Country", name: "Bangladesh" },
  knowsAbout: [
    "Corporate Law",
    "Taxation",
    "VAT and Customs",
    "Foreign Direct Investment",
    "Commercial Litigation",
    "Intellectual Property",
    "Employment and Labour Law",
    "Arbitration",
  ],
  sameAs: [LINKEDIN_URL],
};

export default function Home() {
  return (
    <div className="font-sans text-ink antialiased selection:bg-accent selection:text-ink bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legalServiceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="scroll-progress" aria-hidden="true" />
      <TopBar />
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <WelcomeSection />
        <ManagingPartnerSection />
        <ForeignInvestmentAdvisory />
        <FeaturedServices />
        <AttorneysSection />
        <CorporateClientsSection />
        <EvaluationForm />
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </div>
  );
}
