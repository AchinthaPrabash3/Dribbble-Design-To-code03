import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import FeaturesSection from "../custom/FeaturesSection";
import ProgramSection from "../custom/ProgramSection";
import ReviewSection from "../custom/ReviewSection";
import QandASection from "../custom/QandASection";
import ContactSection from "../custom/ContactSection";
import FooterSection from "../custom/FooterSection";
import PageWithPopup from "../custom/PageWithPupup";
import HeroSection from "../custom/HeroSection";

function App() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProgramSection />
      <ReviewSection />
      <QandASection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
