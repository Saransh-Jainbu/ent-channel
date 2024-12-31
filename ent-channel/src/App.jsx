import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ENTChannelSection from "./components/ENTChannelSection";
import Info from "./components/info";
import BookAppointment from "./components/BookAppointment";
import VisitUs from "./components/VisitUs";
import BookAppointment1 from "./components/BookAppointment1";

const App = () => {
  return (
    <div className="bg-white text-black">
      <ResponsiveAppBar />
      <main className="w-full">
        <ENTChannelSection />
        <Info />
        <BookAppointment />
        <VisitUs />
        <BookAppointment1 />
      </main>
    </div>
  );
};

export default App;
