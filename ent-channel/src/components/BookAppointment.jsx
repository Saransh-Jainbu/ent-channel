import React, { useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

// Reusable Background Wave Component
const PulseWave = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="absolute bottom-0 left-0 w-full overflow-hidden z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <path
      fill="rgba(37, 99, 235, 0.1)"
      fillOpacity="1"
      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </motion.svg>
);

const ConsultationForm = () => {
  // State Management
  const [appointmentDateTime, setAppointmentDateTime] = useState(dayjs());
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Content
  const faqs = [
    {
      question: "What are the common symptoms of an ENT problem?",
      answer: "Common symptoms include persistent sore throat, nasal congestion, ear pain, difficulty swallowing, dizziness, and snoring.",
    },
    {
      question: "When should I see an ENT doctor?",
      answer: "You should see an ENT doctor if you have persistent sinus infections, hearing loss, balance issues, or difficulty breathing.",
    },
    {
      question: "What should I bring to my first ENT appointment?",
      answer: "Bring your medical history, a list of current medications, and any previous test results related to your condition.",
    },
    {
      question: "What treatments do ENT doctors provide?",
      answer: "ENT doctors provide treatments for allergies, infections, hearing loss, voice disorders, and perform surgeries for sinus issues, tonsil removal, and more.",
    },
    {
      question: "Are ENT conditions treatable without surgery?",
      answer: "Many ENT conditions are treatable with medication or therapy. Surgery is usually recommended only for severe cases.",
    },
  ];

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous submission status
    setSubmissionStatus(null);
    
    // Validate form
    if (!validateForm()) return;

    // Set submitting state
    setIsSubmitting(true);

    try {
      // Prepare submission data
      const submissionData = {
        ...formData,
        appointmentDateTime: appointmentDateTime.toISOString()
      };

      // Replace with your actual Google Apps Script Web App URL
      const response = await fetch('https://script.google.com/macros/s/AKfycbzKEfhDrpN_6r6VuegAUpj9XXmwWsPCk9qZuDD446kQCRmxmb8Mi1d5be9V2GdOhAq6ng/exec', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Success handling
      setSubmissionStatus('success');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setAppointmentDateTime(dayjs());

    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle FAQ Question
  const toggleQuestion = (index) => {
    setExpandedQuestionIndex(
      expandedQuestionIndex === index ? null : index
    );
  };

  return (
    <div id="appointment" className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Frequently Asked Questions
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer group"
                  onClick={() => toggleQuestion(index)}
                >
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {faq.question}
                  </h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      expandedQuestionIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {expandedQuestionIndex === index && (
                  <p className="text-sm text-gray-600 mt-3 pl-2 border-l-4 border-blue-500">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consultation Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Book Consultation
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Appointment Date and Time Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Appointment Date & Time
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={appointmentDateTime}
                  onChange={(newValue) => setAppointmentDateTime(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      className="mb-4"
                      variant="outlined"
                    />
                  )}
                />
              </LocalizationProvider>
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Additional details or concerns"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full px-8 py-4 text-white font-semibold rounded-lg shadow-lg transition-colors ${
                isSubmitting 
                  ? "bg-blue-400 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Schedule Appointment"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Submission Status Notifications */}
      {submissionStatus === 'success' && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Appointment request submitted successfully!
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Failed to submit appointment. Please try again.
        </div>
      )}

      {/* Background Wave */}
      <PulseWave />
    </div>
  );
};

export default ConsultationForm;