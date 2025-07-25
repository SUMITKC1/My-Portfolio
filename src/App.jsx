import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import MinorProjects from "./sections/minorprojects";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <Hero />
      <FeatureCards />
      <ShowcaseSection />
      <MinorProjects />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 