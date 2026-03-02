import { useState } from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import PlatformSection from "@/components/sections/PlatformSection";
import StageDiagnosisSection from "@/components/sections/StageDiagnosisSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import EcosystemOrbitalSection from "@/components/sections/EcosystemOrbitalSection";
import FAQSection from "@/components/sections/FAQSection";
import HomepageFooter from "@/components/sections/HomepageFooter";
import ScrollProgress from "@/components/ScrollProgress";
import StageClarityCheck from "@/components/StageClarityCheck";
import ScrollTracker from "@/components/ScrollTracker";

const INDEX_SECTIONS = [
  { id: 'index-hero', name: 'Hero' },
  { id: 'index-problem', name: 'Problem' },
  { id: 'index-platform', name: 'Platform' },
  { id: 'index-stage-diagnosis', name: 'Stage Diagnosis' },
  { id: 'index-ecosystem', name: 'Ecosystem' },
];

const Index = () => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const openDiagnostic = () => setIsDiagnosticOpen(true);

  return (
    <main className="min-h-screen bg-background">
      <ScrollTracker page="Index" sections={INDEX_SECTIONS} />
      <ScrollProgress />
      <Header onOpenDiagnostic={openDiagnostic} />
      <HeroSection onOpenDiagnostic={openDiagnostic} />
      <ProblemSection />
      <PlatformSection />
      <section id="stage-diagnosis">
        <StageDiagnosisSection onOpenDiagnostic={openDiagnostic} />
      </section>
      <section id="ecosystem">
        <EcosystemSection />
      </section>
      <EcosystemOrbitalSection />
      <FAQSection />
      <HomepageFooter onOpenDiagnostic={openDiagnostic} />
      
      <StageClarityCheck 
        isOpen={isDiagnosticOpen} 
        onClose={() => setIsDiagnosticOpen(false)} 
      />
    </main>
  );
};

export default Index;
