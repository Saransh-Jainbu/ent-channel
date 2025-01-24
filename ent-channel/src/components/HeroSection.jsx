import React from "react";
import { motion } from "framer-motion";

const StatItem = ({ icon, title, subtitle }) => (
  <motion.div
    className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {icon}
    <div>
      <h4 className="font-semibold text-blue-900">{title}</h4>
      <p className="text-sm text-blue-700">{subtitle}</p>
    </div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden pt-16 md:pt-0">
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Specialized ENT Care
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Dr. Ajay
            <br />
            <span className="text-blue-600">ENT Clinic</span>
          </h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Combining expertise, compassion, and cutting-edge technology to
            deliver outstanding ENT care. Trust us to put your health first.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <StatItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
              title="+10,000 Happy Patients"
              subtitle="A trusted name in ENT"
            />
            <StatItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              }
              title="20+ Years Experience"
              subtitle="Expert-led services"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            onClick={() => {
              document
                .getElementById("appointment")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Consultation
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="aja.jpg"
              alt="Dr. Ajay - ENT Specialist"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-gray-800">Dr. Ajay Kumar</h3>
                <p className="text-sm text-gray-600 mb-1">Senior ENT Consultant</p>
                <div className="flex items-center">
                  <div className="flex space-x-1 mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(4.9)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;