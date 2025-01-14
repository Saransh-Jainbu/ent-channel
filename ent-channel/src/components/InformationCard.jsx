import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard({ title, description, icon }) {
  return (
    
    <div id="information-card" className="flex flex-col items-center">
      <div className="mb-4 p-4 bg-[#DCE6FF] rounded-full shadow-lg">
        <FontAwesomeIcon icon={icon} size="2x" className="text-[#2C96FF]" />
      </div>
      <h4 className="text-2xl font-semibold font-poppins text-gray-800 mb-2">
        {title}
      </h4>
      {}
      <div className="w-16 h-1 bg-[#9D2553] rounded-lg mb-4"></div>
      <p className="text-gray-600 font-rubik text-base leading-7 tracking-wide">
        {description}
      </p>
    </div>
  );
}

export default InformationCard;
