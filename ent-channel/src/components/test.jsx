import React, { useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

const countryCodes = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" }
];

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
    countryCode: "+91",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const fullPhoneNumber = `${formData.countryCode}${formData.phone}`;
      const submissionData = {
        ...formData,
        phone: fullPhoneNumber,
        appointmentDateTime: appointmentDateTime.toISOString()
      };

      try {
        const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData)
        });

        const result = await response.json();
        
        if (result.status === 'success') {
          alert('Appointment request submitted successfully!');
          // Reset form
          setFormData({
            name: "",
            email: "",
            countryCode: "+91",
            phone: "",
            message: ""
          });
          setAppointmentDateTime(dayjs());
        } else {
          alert(`Submission failed: ${result.message}`);
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert('Failed to submit appointment request');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryCodeChange = (e) => {
    setFormData(prev => ({
      ...prev,
      countryCode: e.target.value
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
      {/* Rest of the existing component remains the same */}
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
      {/* Rest of the existing component remains the same */}
    </div>
  );
};

export default Form;