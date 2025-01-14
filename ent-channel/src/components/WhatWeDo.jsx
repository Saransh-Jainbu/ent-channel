import React from "react";
import InformationCard from "./InformationCard";
import { faEarDeaf, faLungs, faSyringe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function WhatWeDo() {
  return (
    <div className="px-8 text-center bg-white" id="services">
      <div className="my-16">
        <h3 className="text-4xl font-bold font-poppins">
          <span className="relative">
            What We Do
            <span className="absolute w-3/4 h-1 bg-[#9D2553] rounded-lg left-0 -bottom-3 animate-pulseLine"></span>
          </span>
        </h3>
        <p className="my-16 mx-auto text-gray-600 font-rubik text-lg leading-7 tracking-wide max-w-3xl">
          Our ENT specialists offer expert care for conditions involving the
          ear, nose, throat, and related areas. From hearing loss and sinus
          infections to voice disorders and allergies, we provide personalized
          treatments to improve your overall health and quality of life. Trust
          our experienced team to help you breathe, hear, and live better.
        </p>
      </div>

      <div className="grid gap-8 my-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
          <InformationCard
            title="Hearing & Balance"
            description="Our team addresses hearing loss, tinnitus, and balance disorders using advanced diagnostic tools and personalized treatments. Experience improved hearing and a balanced lifestyle through our specialized care."
            icon={faEarDeaf}
          />
        </div>

        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
          <InformationCard
            title="Sinus & Allergy Care"
            description="Get relief from chronic sinus infections, nasal congestion, and allergies. We provide effective treatments to improve breathing, alleviate discomfort, and enhance your quality of life."
            icon={faLungs}
          />
        </div>

        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
          <InformationCard
            title="Voice & Throat Health"
            description="Our services include diagnosis and treatment of voice disorders, throat infections, and swallowing difficulties. Restore your vocal health with expert care tailored to your needs."
            icon={faSyringe}
          />
        </div>
      </div>

      {/* Full-Width Fancy Animated Divider */}
      <div className="py-6">
        <motion.div
          className="border-t-4 border-gradient-to-r from-teal-400 via-blue-400 to-purple-500 w-screen mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
