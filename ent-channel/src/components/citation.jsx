import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Somesh Jain",
      content: "As an ENT specialist, Dr. Ajay is truly exceptional. His professionalism, expertise, and bedside manner are all top-notch. I highly recommend him to anyone seeking treatment for ear, nose, or throat conditions.",
      date: "6 months ago",
      rating: 5,
      reviewCount: 78
    },
    {
      name: "Mudassir Khan",
      content: "I've been a patient of Dr. Ajay's for several years now, and I can confidently say he is the best ENT doctor I've ever visited. His diagnostic skills are unparalleled, and he always takes the time to thoroughly explain my condition and treatment options.",
      date: "4 months ago",
      rating: 4.9,
      reviewCount: 64
    },
    {
      name: "Rahul Sharma",
      content: "Dr. Ajay's clinic is immaculately clean and well-equipped with the latest medical technology. The staff is friendly and accommodating, making the entire experience pleasant and efficient. I'm grateful to have found such an exceptional ENT specialist in my local area.",
      date: "8 months ago",
      rating: 5,
      reviewCount: 92
    },
    {
      name: "Ekta Jain",
      content: "I was hesitant to see an ENT doctor, but Dr. Ajay put me at ease from the moment I stepped into his clinic. He listened patiently to my concerns and provided a thorough examination, ultimately resolving my issue with great care and professionalism.",
      date: "7 years ago",
      rating: 4.8,
      reviewCount: 51
    },
    {
      name: "Priya Sharma",
      content: "I've been a loyal patient of Dr. Ajay for the past 10 years. His expertise and commitment to providing the best possible care are unmatched. I trust him completely and would recommend him to anyone in need of an exceptional ENT specialist.",
      date: "2 years ago",
      rating: 5,
      reviewCount: 106
    },
    {
      name: "Arjun Kapoor",
      content: "Dr. Ajay's clinic is a true gem. The staff is friendly and efficient, and the doctor himself is incredibly knowledgeable and attentive. I'm grateful for the care I've received and the positive impact it's had on my quality of life.",
      date: "1 year ago",
      rating: 4.9,
      reviewCount: 82
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Auto-change testimonials
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        isMobile 
          ? (prevIndex + 1) % testimonials.length 
          : (prevIndex + 3) % testimonials.length
      );
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [isMobile, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      isMobile 
        ? (prevIndex + 1) % testimonials.length 
        : (prevIndex + 3) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      isMobile 
        ? (prevIndex - 1 + testimonials.length) % testimonials.length 
        : (prevIndex - 3 + testimonials.length) % testimonials.length
    );
  };

  const getCurrentTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length]
    ];
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Patients Say</h2>
        <div className="relative">
          <div className="flex justify-between mb-6 max-w-4xl mx-auto">
            <button
              onClick={handlePrev}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div 
            className={`
              max-w-4xl mx-auto
              ${isMobile 
                ? 'grid grid-cols-1 gap-4' 
                : 'grid grid-cols-3 gap-4'
              } overflow-hidden`
            }
          >
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 relative"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-gray-800 text-base">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                          <Star key={i} size={14} />
                        ))}
                        {testimonial.rating % 1 !== 0 && (
                          <Star size={14} className="text-yellow-500/50" />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm">
                      {testimonial.date} - {testimonial.reviewCount} reviews
                    </p>
                  </div>
                </div>
                <p className="italic text-gray-700 mb-4 text-base">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;