import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HeroSection from "./components/HeroSection";
import VisitUs from "./components/VisitUs";
import BookAppointment from "./components/BookAppointment";
import WhyChooseUs from "./components/WhyChooseUS";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/footer";
import AboutDoctor from "./components/aboutme";
import CitationSection from "./components/citation";
const App = () => {
  return (
    <div className="bg-white text-black">
      <ResponsiveAppBar />
      <main className="w-full">
        <HeroSection />
        <CitationSection />
        <WhatWeDo />
        <WhyChooseUs />
        <VisitUs />
        <BookAppointment />
        <Footer />
      </main>
    </div>
  );
};

export default App;
