import React from "react";
import { IoMdStar } from "react-icons/io";
import { motion } from "framer-motion"; 

const ENTChannelSection = () => {
  return (
    <div>
      {}
      <div className="flex flex-col md:flex-row min-h-[80vh] bg-gradient-to-br from-blue-100 to-teal-200">
        {}
        <div className="flex-1 p-8">
          <div className="max-w-2xl mx-auto flex flex-col justify-center h-full">
            <h1 className="text-[48px] font-extrabold text-gray-800 leading-tight mb-6">
              Dr. Ajay ENT Channel:
              <br />
              Precision Care for Ears, Nose, and Throat!
            </h1>
            <p className="text-xl text-gray-800 mb-6">
              Providing top-tier specialized care with the latest technology and
              expertise.
            </p>
            <button className="px-6 py-3 bg-teal-500 text-white font-semibold text-xl rounded-full shadow-lg hover:bg-teal-600 transition duration-300">
              Book Appointment
            </button>
          </div>
        </div>

        {}
        <div className="flex-1 p-8 flex flex-col items-center justify-center">
          {}
          <div className="relative w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl overflow-hidden">
            {}
            <div className="relative w-full h-[350px] rounded-3xl shadow-lg">
              {}
              <motion.img
                src="aja.jpg" 
                alt="Student"
                className="w-full h-full object-cover rounded-3xl border-8 border-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {}
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
                "With years of expertise, I focus on personalized care to
                address your unique health needs, helping you live a healthier
                and more fulfilling life."{" "}
              </p>
              <div className="flex justify-center mt-4">
                <span className="text-teal-500 font-semibold">Dr. Ajay</span>
                <span className="text-gray-500 ml-2">ENT Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ENTChannelSection;
