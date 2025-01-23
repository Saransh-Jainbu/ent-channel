import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FacebookIcon, href: "#", color: "text-blue-600" },
    { icon: LinkedinIcon, href: "#", color: "text-blue-800" },
    { icon: TwitterIcon, href: "#", color: "text-blue-400" },
    { icon: YoutubeIcon, href: "#", color: "text-red-600" },
  ];

  return (
    <footer className="bg-gray-50 text-gray-800 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Contact Us
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-5 w-5 text-blue-500" />
              <span>123 Medical Street, Health City</span>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-5 w-5 text-blue-500" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MailIcon className="h-5 w-5 text-blue-500" />
              <span>contact@medicalchannel.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Quick Links
          </h3>
          <div className="space-y-2">
            {[
              "Services",
              "About Us",
              "Book Appointment",
              "Patient Resources",
            ].map((link) => (
              <div
                key={link}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {link}
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, color }) => (
              <a
                key={href}
                href={href}
                className={`${color} hover:opacity-75 transition-opacity`}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-8 pt-6 text-center text-gray-500">
        © {currentYear} Medical Channel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
