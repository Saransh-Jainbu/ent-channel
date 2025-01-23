import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Stethoscope, Microscope, Activity } from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: Stethoscope,
      text: "Expert ENT Doctors with Years of Experience",
      color: "text-blue-600"
    },
    {
      icon: Microscope,
      text: "Comprehensive Hearing Tests and Advanced Diagnostics",
      color: "text-teal-600"
    },
    {
      icon: Activity,
      text: "Cutting-Edge Allergy and Sinus Management",
      color: "text-green-600"
    },
    {
      icon: CheckCircle,
      text: "State-of-the-Art Medical Facilities",
      color: "text-purple-600"
    }
  ];

  const handleBookAppointmentClick = () => {
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="why-choose-us">
      <div className="p-8 flex flex-wrap lg:flex-nowrap items-center gap-8 bg-gradient-to-br from-lavender-300 to-mint-300 min-h-[80vh]">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="clinic.jpg"
            alt="ENT Doctor"
            className="w-full h-auto max-w-[500px] mx-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Professional Right Side */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2 
            }}
            className="text-4xl font-extrabold text-gray-900 
                        bg-clip-text text-transparent 
                        bg-gradient-to-r from-blue-600 to-purple-600 
                        mb-4 leading-tight"
          >
            Precision ENT Care
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-1/2 mt-3 rounded"></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3 
            }}
            className="text-gray-600 text-lg leading-relaxed mb-6"
          >
            Our specialized ENT care combines cutting-edge medical technology 
            with personalized, compassionate treatment. We deliver precise 
            diagnostics and innovative solutions for your ear, nose, and 
            throat health.
          </motion.p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.1 
                }}
                className="flex items-center space-x-4 
                            p-3 bg-white rounded-xl 
                            shadow-sm hover:shadow-md 
                            transition-all duration-300"
              >
                <feature.icon 
                  className={`${feature.color} flex-shrink-0`} 
                  size={28} 
                />
                <span className="text-gray-800 font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

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