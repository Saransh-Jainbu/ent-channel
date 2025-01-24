import React, { useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

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

const Form = () => {
  const [appointmentDateTime, setAppointmentDateTime] = useState(dayjs());
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Validation state
  const [errors, setErrors] = useState({});

  // FAQ data
  const faqs = [
    {
      question: "What are the common symptoms of an ENT problem?",
      answer:
        "Common symptoms include persistent sore throat, nasal congestion, ear pain, difficulty swallowing, dizziness, and snoring.",
    },
    {
      question: "When should I see an ENT doctor?",
      answer:
        "You should see an ENT doctor if you have persistent sinus infections, hearing loss, balance issues, or difficulty breathing.",
    },
    {
      question: "What should I bring to my first ENT appointment?",
      answer:
        "Bring your medical history, a list of current medications, and any previous test results related to your condition.",
    },
    {
      question: "What treatments do ENT doctors provide?",
      answer:
        "ENT doctors provide treatments for allergies, infections, hearing loss, voice disorders, and perform surgeries for sinus issues, tonsil removal, and more.",
    },
    {
      question: "Are ENT conditions treatable without surgery?",
      answer:
        "Many ENT conditions are treatable with medication or therapy. Surgery is usually recommended only for severe cases.",
    },
  ];

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement actual submission logic
      console.log("Form submitted", formData);
      alert("Appointment request submitted successfully!");
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleQuestion = (index) => {
    setExpandedQuestionIndex(expandedQuestionIndex === index ? null : index);
  };

  return (
    <div
      id="appointment"
      className="relative bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Section: FAQ */}
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

        {/* Right Section: Appointment Form */}
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
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

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
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
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

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Appointment
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Background Wave */}
      <PulseWave />
    </div>
  );
};

export default Form;