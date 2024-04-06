import { useState } from "react";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";
import ContactForm from "../components/ContactForm";
import HeroSection from "./HomePage/HeroSection";
import WhatIDoSection from "./HomePage/WhatIDoSection";
import ProjectsSection from "./HomePage/ProjectsSection";

export default function Home( ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 w-screen bg-bkg-mate text-content-vivid">
      <HeroSection />
      <WhatIDoSection />
      <div className="relative">
        <div className="sticky top-0">
          <ProjectsSection />
        </div>
        <div className="sticky top-0">
          <Footer setIsOpen={setIsOpen} />
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <ContactForm />
      </Drawer>
    </div>
  );
}
