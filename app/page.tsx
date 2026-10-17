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

export default function Home() {
  return (
    <div className="font-sans text-ink antialiased selection:bg-accent selection:text-ink bg-cream">
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
