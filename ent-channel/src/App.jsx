import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HeroSection from "./components/HeroSection";
import VisitUs from "./components/VisitUs";
import BookAppointment from "./components/BookAppointment";
import WhyChooseUs from "./components/WhyChooseUS";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/footer";
import AboutDoctor from "./components/aboutme";
const App = () => {
  return (
    <div className="bg-white text-black">
      <ResponsiveAppBar />
      <main className="w-full">
        <HeroSection />
        <WhatWeDo />
        <WhyChooseUs />
        <VisitUs />
        <BookAppointment />
        <AboutDoctor />
        <Footer />
      </main>
    </div>
  );
};

export default App;
