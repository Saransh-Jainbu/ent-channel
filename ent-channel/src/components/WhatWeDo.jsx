import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  HeadphonesIcon, 
  WindIcon, 
  MicIcon 
} from "lucide-react";

const ServiceCard = ({ title, description, Icon }) => (
  <motion.div 
    className="group border border-gray-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2"
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex items-center mb-4 space-x-4">
      <div className="bg-blue-100 p-3 rounded-full">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

function WhatWeDo() {
  const [inView, setInView] = useState(false);
  const dividerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Hearing & Balance",
      description: "Advanced diagnostic tools and personalized treatments for hearing loss, tinnitus, and balance disorders. Improve your hearing and lifestyle.",
      Icon: HeadphonesIcon
    },
    {
      title: "Sinus & Allergy Care",
      description: "Comprehensive relief from chronic sinus infections, nasal congestion, and allergies. Breathe easier and live more comfortably.",
      Icon: WindIcon
    },
    {
      title: "Voice & Throat Health",
      description: "Expert diagnosis and treatment of voice disorders, throat infections, and swallowing difficulties. Restore your vocal health.",
      Icon: MicIcon
    }
  ];

  return (
    <div className="px-8 py-16 bg-gray-50" id="services">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            What We Do
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Our ENT specialists provide expert care for ear, nose, and throat conditions. 
            From hearing loss to sinus issues, we offer personalized treatments to enhance 
            your health and quality of life.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            </motion.div>
          ))}
        </div>

        <div className="py-8 mt-12" ref={dividerRef}>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 w-full"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;