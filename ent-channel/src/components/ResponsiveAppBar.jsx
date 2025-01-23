import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavIcons = {
  WhatsApp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.043 6.425a4.055 4.055 0 00-4.106 3.99c0 .884.297 1.707.834 2.386l.117.148-.494 1.788 1.836-.484.145.087a4.017 4.017 0 002.518.868 4.055 4.055 0 004.051-4.005 4.015 4.015 0 00-1.184-2.857 4.062 4.062 0 00-2.857-1.185zm0 6.538a2.493 2.493 0 01-1.564-.54l-1.109.293.297-1.076a2.463 2.463 0 01-.594-1.562 2.537 2.537 0 012.532-2.488 2.514 2.514 0 011.781.738c.476.465.738 1.083.738 1.74a2.537 2.537 0 01-2.532 2.532l.044.043zM12 2a10 10 0 00-8.54 15.34L2 22l4.73-1.48A10 10 0 1012 2z" />
    </svg>
  ),
  YouTube: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.246 11.626.245 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  ),
  ArrowUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  )
};

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const pages = [
    { name: "About Us", id: "why-choose-us" },
    { name: "Contact Us", id: "visit-us" },
    { name: "Book Appointment", id: "appointment" }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xl font-bold text-white">ENT Channel</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <motion.button
              key={page.id}
              onClick={() => handleScroll(page.id)}
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-blue-200 transition-colors"
            >
              {page.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            {pages.map((page) => (
              <motion.div
                key={page.id}
                whileHover={{ x: 10 }}
                onClick={() => handleScroll(page.id)}
                className="px-4 py-3 border-b hover:bg-blue-50 cursor-pointer"
              >
                {page.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showScrollTop && (
          <div className="fixed bottom-4 right-4 space-y-4">
            {/* Scroll to Top */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600"
            >
              <NavIcons.ArrowUp />
            </motion.button>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/1234567890"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 block"
            >
              <NavIcons.WhatsApp />
            </motion.a>

            {/* YouTube */}
            <motion.a
              href="https://www.youtube.com/channel/UC_x5XG1OV2P6uYjRr8wAYeA"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white rounded-full p-3 shadow-lg hover:bg-red-600 block"
            >
              <NavIcons.YouTube />
            </motion.a>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ResponsiveNavbar;