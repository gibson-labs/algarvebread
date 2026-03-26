import React from "react";
import NavBar from "../components/sourdough/NavBar";
import HeroSection from "../components/sourdough/HeroSection";
import AboutSection from "../components/sourdough/AboutSection";
import ProcessSection from "../components/sourdough/ProcessSection";
import GallerySection from "../components/sourdough/GallerySection";
import FindMeSection from "../components/sourdough/FindMeSection";
import FooterSection from "../components/sourdough/FooterSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <GallerySection />
      <FindMeSection />
      <FooterSection />
    </div>
  );
}