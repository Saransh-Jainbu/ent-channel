import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ENTChannelSection from "./components/ENTChannelSection";
import Info from "./components/info";
import BookAppointment from "./components/BookAppointment";
import VisitUs from "./components/VisitUs";

const App = () => {
  return (
    <div className="bg-white text-black">
      <ResponsiveAppBar />
      <main className="w-full">
        <ENTChannelSection />
        <Info />
        <BookAppointment />
        <VisitUs />
      </main>
    </div>
  );
};

export default App;
