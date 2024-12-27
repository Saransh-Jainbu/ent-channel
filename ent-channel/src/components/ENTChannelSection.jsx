import React from "react";
import { IoMdStar } from "react-icons/io";
import { motion } from "framer-motion"; // Import framer-motion for smooth animations

const ENTChannelSection = () => {
  return (
    <div>
      {/* Gradient Section */}
      <div className="flex flex-col md:flex-row min-h-[80vh] bg-gradient-to-br from-blue-100 to-teal-200">
        {/* Left Section */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl mx-auto flex flex-col justify-center h-full">
            <h1 className="text-[48px] font-extrabold text-gray-800 leading-tight mb-6">
              Dr. Ajay ENT Channel:
              <br />
              Precision Care for Ears, Nose, and Throat!
            </h1>
            <p className="text-xl text-gray-800">
              Providing top-tier specialized care with the latest technology and
              expertise.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8 flex flex-col items-center justify-center">
          {/* Decorative Container */}
          <div className="relative w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl overflow-hidden">
            {/* Frame for the Image */}
            <div className="relative w-full h-[350px] rounded-3xl shadow-lg">
              {/* Image with no background gradient */}
              <motion.img
                src="aja.jpg" // Replace with the correct path to the student picture
                alt="Student"
                className="w-full h-full object-cover rounded-3xl border-8 border-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Medical-Themed Content Below Image */}
            <div className="mt-4 bg-white bg-opacity-80 p-4 rounded-3xl shadow-md">
              <h2 className="text-xl font-bold text-center text-gray-800">
                Top Rating - Excellent Care
              </h2>
              <div className="flex justify-center items-center gap-1 mt-2">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg translate-y-[-4px] transform hover:scale-110 transition-transform duration-300"
                  >
                    <IoMdStar className="text-white text-xl" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-center text-gray-600 mt-2">
              "With years of expertise, I focus on personalized care to address your unique health needs, helping you live a healthier and more fulfilling life."              </p>
              <div className="flex justify-center mt-4">
                <span className="text-teal-500 font-semibold">Dr. Ajay</span>
                <span className="text-gray-500 ml-2">ENT Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections (No Gradient) */}
      <div className="bg-white p-8">
        {/* Add your next section content here */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Next Section</h2>
        <p className="text-xl text-gray-600">Content for the next section goes here.</p>
      </div>

      <div className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Another Section</h2>
        <p className="text-xl text-gray-600">More content here...</p>
      </div>
    </div>
  );
};

export default ENTChannelSection;
