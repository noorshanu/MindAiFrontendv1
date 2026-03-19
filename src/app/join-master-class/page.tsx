import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BenefitsSection } from "./BenefitsSection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { MasterclassSection } from "./MasterclassSection";
import { PricingSection } from "./PricingSection";
import { WebinarFaq } from "./WebinarFaq";

const JoinWebinarPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-hidden  mx-auto">
        <HeroSection />
        <BenefitsSection />
        <MasterclassSection />
        <FeaturesSection />
        <PricingSection />
        <WebinarFaq />

      </div>
      <Footer />
    </>
  )
}

export default JoinWebinarPage
