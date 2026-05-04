import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

import { HeroSection } from "./HeroSection";

import { PricingSection } from "./PricingSection";
import { WebinarFaq } from "./WebinarFaq";
import PhysologicalField from "./PhysologicalField";
import WhatYouLearn from "./WhatYouLearn";
import FiveDay from "./FiveDay";
import Whatuhwill from "./Whatuhwill";
import MeetMentors from "./MeetMentors";

const JoinWebinarPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-hidden  mx-auto">
        <HeroSection />
        <PhysologicalField />
        {/* <BenefitsSection /> */}
        {/* <MasterclassSection />
        <FeaturesSection /> */}
        <PricingSection />
        <WhatYouLearn />
        <FiveDay />
        <MeetMentors />
        <Whatuhwill />
       
        <WebinarFaq />

      </div>
      <Footer />
    </>
  )
}

export default JoinWebinarPage
