import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const App = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <ResponsiveAppBar />
      <main className="pt-16" style={{ padding: "10px" }}>
        <h1 className="text-4xl font-bold">Welcome to My Entertainment Channel!</h1>
        <p>Explore the amazing content we have for you.</p>
      </main>
    </div>
  );
};

export default App;
