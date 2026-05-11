import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import PosTeaser from "./components/PosTeaser";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-zest-black bg-white selection:bg-zest-yellow selection:text-zest-black">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <PosTeaser />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
