import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ENTChannelSection from "./components/ENTChannelSection";
import Info from "./components/info";
import BookAppointment from "./components/BookAppointment";

const App = () => {
  return (
    <div className="bg-white text-black">
      <ResponsiveAppBar />
      <main className="w-full">
        <ENTChannelSection />
        <Info /> 
        <BookAppointment />
      </main>
    </div>
  );
};

export default App;
