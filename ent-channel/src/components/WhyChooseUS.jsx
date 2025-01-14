import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // <-- Added this import

function WhyChooseUs() {
  const handleBookAppointmentClick = () => {
    window.location.href = "/appointment";
  };

  return (
    <div>
      <div className="p-8 flex flex-wrap lg:flex-nowrap items-center gap-8 bg-gradient-to-br from-lavender-300 to-mint-300 min-h-[80vh]">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="clinic.jpg"
            alt="ENT Doctor"
            className="w-full h-auto max-w-[500px] mx-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-4xl font-bold font-poppins relative">
            Why Choose Our ENT Care
            <span className="block w-3/4 h-1 bg-pink-700 rounded-md mt-2"></span>
          </h3>
          <p className="text-gray-600 font-rubik text-lg leading-relaxed">
            Choose our specialized ENT care for all your ear, nose, and throat
            concerns. Our expert doctors are dedicated to providing top-tier
            treatments for hearing loss, sinus issues, throat infections, and
            more. Get the care you need with our advanced diagnostic tools and
            personalized treatment plans.
          </p>

          {/* Features List */}
          <div className="space-y-4">
            {[
              "Expert ENT Doctors with Years of Experience",
              "Comprehensive Hearing Tests and Treatment",
              "Allergy and Sinus Management",
              "State-of-the-Art ENT Facilities",
            ].map((feature, index) => (
              <p
                key={index}
                className="flex items-center text-gray-800 text-xl font-semibold"
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-blue-500 mr-3"
                />
                {feature}
              </p>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={handleBookAppointmentClick}
            className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-blue-500 transition"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Fancy Line */}
      <div className="py-6">
        <motion.div
          className="border-t-4 border-gradient-to-r from-teal-400 via-blue-400 to-purple-500 w-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
