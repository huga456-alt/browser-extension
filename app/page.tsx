import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImplementationStepsSection } from "@/components/sections/ImplementationStepsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SystemsOverviewSection } from "@/components/sections/SystemsOverviewSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ComparisonSection />
      <SystemsOverviewSection />
      <ImplementationStepsSection />
      <AdvantagesSection />
      <ServicesSection />
      <CaseStudiesSection />
      <CertificatesSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
