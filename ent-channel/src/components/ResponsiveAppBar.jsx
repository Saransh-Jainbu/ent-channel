import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  StethoscopeIcon, 
  ScrollTextIcon, 
  PhoneIcon, 
  CalendarCheckIcon,
  ArrowUpIcon,
  MessageSquareIcon,
  YoutubeIcon 
} from "lucide-react";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const pages = [
    { name: "Services", id: "services", icon: StethoscopeIcon },
    { name: "About", id: "services", icon: ScrollTextIcon },
    { name: "Contact", id: "visit-us", icon: PhoneIcon },
    { name: "Appointments", id: "appointment", icon: CalendarCheckIcon }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      setShowScrollTop(window.scrollY > 200);
      
      pages.forEach(page => {
        const element = document.getElementById(page.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(page.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <StethoscopeIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-semibold text-gray-800 tracking-tight">
            ENT Channel
          </span>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <motion.button
              key={page.id}
              onClick={() => handleScroll(page.id)}
              whileHover={{ scale: 1.05 }}
              className={`
                flex items-center space-x-2 text-gray-600 hover:text-blue-600 
                transition-all duration-300 
                ${activeSection === page.id 
                  ? 'text-blue-600 font-semibold' 
                  : ''}
              `}
            >
              <page.icon className="h-5 w-5" />
              <span>{page.name}</span>
            </motion.button>
          ))}
        </div>

        <motion.button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-md"
          >
            {pages.map((page) => (
              <motion.div
                key={page.id}
                whileHover={{ x: 10 }}
                onClick={() => handleScroll(page.id)}
                className={`
                  px-6 py-4 border-b flex items-center space-x-3 
                  cursor-pointer transition-all
                  ${activeSection === page.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'hover:bg-gray-50 text-gray-700'}
                `}
              >
                <page.icon className="h-5 w-5" />
                <span>{page.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <div className="fixed bottom-6 right-6 space-y-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all"
            >
              <ArrowUpIcon className="h-5 w-5" />
            </motion.button>

            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 block transition-all"
            >
              <MessageSquareIcon className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="https://www.youtube.com/channel/UC_x5XG1OV2P6uYjRr8wAYeA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white rounded-full p-3 shadow-lg hover:bg-red-600 block transition-all"
            >
              <YoutubeIcon className="h-5 w-5" />
            </motion.a>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ResponsiveNavbar;