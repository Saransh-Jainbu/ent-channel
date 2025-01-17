import React, { useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";  // Import TextField

const Form = () => {
  const [appointmentDateTime, setAppointmentDateTime] = useState(dayjs());
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState(null);

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

  const toggleQuestion = (index) => {
    setExpandedQuestionIndex(expandedQuestionIndex === index ? null : index);
  };

  return (
<div id="appointment" className="flex flex-col md:flex-row min-h-[80vh] bg-gradient-to-br from-lavender-300 to-mint-300 items-center justify-center">
<motion.div
        className="container mx-auto p-8 shadow-lg bg-white rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.1)", // Added shadow for both top and bottom
        }}
      >
        <div className="flex flex-wrap">
          {/* Left Section: FAQ */}
          <div className="w-full md:w-1/2 px-4">
            <div className="p-4">
              <motion.h3
                className="text-2xl font-semibold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Frequently Asked Questions
              </motion.h3>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="py-4 border-b border-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                  >
                    <p className="text-sm font-medium">{faq.question}</p>
                    <i
                      className={`ri-add-line text-lg text-gray-500 transform transition ${
                        expandedQuestionIndex === index ? "rotate-45" : ""
                      }`}
                    ></i>
                  </div>
                  {expandedQuestionIndex === index && (
                    <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section: Appointment Form */}
          <div className="w-full md:w-1/2 px-4">
            <div className="p-4">
              <motion.h3 className="text-2xl font-semibold mb-6">
                Make An Appointment
              </motion.h3>
              <div>
                <label className="block text-sm mb-2">Full Name</label>
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Appointment Date & Time</label>
                <motion.div className="mb-4">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      value={appointmentDateTime}
                      onChange={(newValue) => setAppointmentDateTime(newValue)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      )}
                    />
                  </LocalizationProvider>
                </motion.div>
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <motion.textarea
                  placeholder="Message"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                  rows="4"
                />
              </div>
              <motion.button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Make An Appointment
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Form;
