import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ENTChannelSection from './components/ENTChannelSection';


const App = () => {
  return (
    <div className="bg-white text-black">
      <ResponsiveAppBar />
      <main className="w-full">
      <div className="text-red-500">
  <h1>Hello, World!</h1>
</div>

        <ENTChannelSection />
      </main>
    </div>
  );
};

export default App;