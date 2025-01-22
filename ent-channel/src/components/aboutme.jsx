import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutDoctor = () => {
  const [inView, setInView] = useState(false);

  // Slide-in animation variants
  const slideIn = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 0.8 },
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#about-doctor");
      const rect = section.getBoundingClientRect();
      setInView(rect.top < window.innerHeight && rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="about-doctor"
      className="relative flex flex-col md:flex-row min-h-[90vh] bg-gradient-to-br from-lavender-300 to-mint-300 items-center justify-center px-6 py-10 overflow-hidden"
    >
      {/* Decorative Pointer Animation */}
      <motion.div
        className="absolute w-16 h-16 bg-teal-400 rounded-full blur-lg"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="absolute top-10 right-10 w-12 h-12 bg-teal-300 rounded-full blur-md"
        animate={{ scale: [1.1, 1], opacity: [0.8, 1] }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="max-w-5xl w-full text-center md:text-left space-y-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold text-black"
          variants={slideIn("left")}
        >
          About Me
        </motion.h1>
        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Current Position */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-6 hover:bg-teal-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={slideIn("left")}
          >
            <h2 className="text-2xl font-bold text-black mb-4">
              Current Position
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li className="hover:text-teal-500 transition duration-300">
                Honorary Secretary, All India Rhinology Society (2022-2025)
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Senior Otolaryngologist, Yashoda Super Specialty Hospital,
                Kaushambhi, Delhi NCR
              </li>
            </ul>
          </motion.div>
          {/* Residency */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-6 hover:bg-teal-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={slideIn("right")}
          >
            <h2 className="text-2xl font-bold text-black mb-4">
              Residency - Otolaryngology (MS) (1998-2004)
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li className="hover:text-teal-500 transition duration-300">
                Postgraduate Institute of Medical Education & Research,
                Chandigarh, India.
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Senior Resident Fellow Otolaryngology (2001-2004)
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Junior Resident Fellow Otolaryngology (1998-2001)
              </li>
            </ul>
          </motion.div>
          {/* Medical School */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-6 hover:bg-teal-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={slideIn("left")}
          >
            <h2 className="text-2xl font-bold text-black mb-4">
              Medical School (MBBS) (1991-1997)
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li className="hover:text-teal-500 transition duration-300">
                Veer Surendra Sai Medical College & Hospital, Orissa, India.
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Includes one-year clerkship in Medicine, Surgery, Community
                Medicine, and Obstetrics & Gynaecology (1996-97)
              </li>
            </ul>
          </motion.div>
          {/* Certifications */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-6 hover:bg-teal-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={slideIn("right")}
          >
            <h2 className="text-2xl font-bold text-black mb-4">
              Certifications
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li className="hover:text-teal-500 transition duration-300">
                Education Commission of Foreign Medical Graduates (ECFMG) USA
                (2012)
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                USMLE
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Diplomat of National Board (DNB), New Delhi (2005)
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Advanced Cardiac Life Support (Sept 2014)
              </li>
            </ul>
          </motion.div>
          {/* Visiting Fellow */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-6 hover:bg-teal-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={slideIn("left")}
          >
            <h2 className="text-2xl font-bold text-black mb-4">
              Visiting Fellow
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li className="hover:text-teal-500 transition duration-300">
                Memorial Sloan-Kettering Cancer Centre, New York.
                January-February 2013.
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                NYU Voice Centre, New York. March 2013.
              </li>
            </ul>
          </motion.div>
          {/* Research */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-6 hover:bg-teal-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={slideIn("right")}
          >
            <h2 className="text-2xl font-bold text-black mb-4">Research</h2>
            <p className="text-gray-700">
              Research Methodology and Bio-statistics at Postgraduate Institute
              of Medical Education & Research, Chandigarh, India. (2001).
              Studied Auditory Brainstem Responses in Lepromatous Leprosy
              patients before and after Multidrug therapy.
            </p>
          </motion.div>
          {/* Publications */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-6 hover:bg-teal-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={slideIn("left")}
          >
            <h2 className="text-2xl font-bold text-black mb-4">Publications</h2>
            <p className="text-gray-700">
              Published 11 international and 9 national papers.
              <span className="underline text-teal-500 cursor-pointer hover:text-teal-700 transition duration-300">
                [Read More]
              </span>
            </p>
          </motion.div>
          {/* Area of Interest */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-6 hover:bg-teal-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={slideIn("right")}
          >
            <h2 className="text-2xl font-bold text-black mb-4">
              Area of Interest
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li className="hover:text-teal-500 transition duration-300">
                Rhinoplasties (Nose-Job)
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Allergic Rhinosinusitis
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Endoscopic Sinus Surgeries
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Balloon Sinuplasty
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Voice Disorders
              </li>
              <li className="hover:text-teal-500 transition duration-300">
                Laser Surgeries
              </li>{" "}
            </ul>{" "}
          </motion.div>{" "}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutDoctor;
