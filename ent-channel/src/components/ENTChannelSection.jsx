import React from "react";
import Container from "@mui/material/Container";

const ENTChannelSection = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="flex-1 p-8 bg-gradient-to-br from-purple-600 to-blue-400">
        <div className="max-w-2xl mx-auto flex flex-col justify-center h-full">
          <h1 className="text-[48px] font-extrabold text-white leading-tight mb-6">
            Dr. Ajay ENT Channel:
            <br />
            Precision Care for Ears, Nose, and Throat!
          </h1>
          <p className="text-xl text-white">
            Providing top-tier specialized care with the latest technology and
            expertise.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 p-8 flex items-center justify-center">
        <img
          src="test.JPG"
          alt="Student"
          className="max-w-full h-auto rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default ENTChannelSection;
