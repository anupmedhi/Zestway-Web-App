import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <AboutUs />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
