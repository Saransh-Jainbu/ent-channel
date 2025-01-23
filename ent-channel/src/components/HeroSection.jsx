import React, { useState } from "react";
import { motion } from "framer-motion";

const PulseWave = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="absolute bottom-0 left-0 w-full overflow-hidden z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <path
      fill="rgba(37, 99, 235, 0.1)"
      fillOpacity="1"
      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </motion.svg>
);

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
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="relative bg-white overflow-hidden">
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
          onHoverStart={() => setIsImageHovered(true)}
          onHoverEnd={() => setIsImageHovered(false)}
        >
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            animate={{
              rotate: isImageHovered ? [0, 2, -2, 0] : 0,
              scale: isImageHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="aja.jpg"
              alt="Dr. Ajay - ENT Specialist"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-gray-800">Dr. Ajay</h3>
                <p className="text-sm text-gray-600">Senior ENT Consultant</p>
              </div>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Wave */}
      <PulseWave />
    </div>
  );
};

export default HeroSection;
