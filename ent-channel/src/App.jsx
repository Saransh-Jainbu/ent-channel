import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ENTChannelSection from "./components/ENTChannelSection";
import Info from "./components/info";

const App = () => {
  return (
    <div className="bg-white text-black">
      <ResponsiveAppBar />
      <main className="w-full">
        <ENTChannelSection />
        <Info /> 
      </main>
    </div>
  );
};

export default App;
