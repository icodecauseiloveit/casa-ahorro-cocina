import { HeroSection } from "@/components/landing/HeroSection";
import { AgitationSection } from "@/components/landing/AgitationSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { VaultContentsSection } from "@/components/landing/VaultContentsSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { MathSection } from "@/components/landing/MathSection";
import { ValueStackSection } from "@/components/landing/ValueStackSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { UrgencySection } from "@/components/landing/UrgencySection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { PSSection } from "@/components/landing/PSSection";
import { FooterBadges } from "@/components/landing/FooterBadges";
import { StickyBar } from "@/components/landing/StickyBar";

import { PurchaseNotification } from "@/components/landing/PurchaseNotification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <div className="pt-0">
        <HeroSection />
        <AgitationSection />
        <SolutionSection />
        <VaultContentsSection />
        <BonusSection />
        <MathSection />
        <ValueStackSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <UrgencySection />
        <FAQSection />
        <FinalCTASection />
        <PSSection />
        <FooterBadges />
      </div>
      <StickyBar />
      <PurchaseNotification />
    </div>
  );
};

export default Index;
