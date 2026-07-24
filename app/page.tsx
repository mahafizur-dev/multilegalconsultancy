import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { ManagingPartnerSection } from "@/components/sections/ManagingPartnerSection";
import { ForeignInvestmentAdvisory } from "@/components/sections/ForeignInvestmentAdvisory";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { AttorneysSection } from "@/components/sections/AttorneysSection";
import { CorporateClientsSection } from "@/components/sections/CorporateClientsSection";
import { EvaluationForm } from "@/components/sections/EvaluationForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-[#c39b65] selection:text-white bg-white">
      <TopBar />
      <Header />

      <main>
        <HeroSection />
        <WelcomeSection />
        <ManagingPartnerSection />
        <ForeignInvestmentAdvisory />
        <FeaturedServices />
        <AttorneysSection />
        <CorporateClientsSection />
        <EvaluationForm />
      </main>

      <Footer />
    </div>
  );
}
