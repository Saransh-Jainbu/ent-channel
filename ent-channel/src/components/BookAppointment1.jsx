import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: null,
    time: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleTimeChange = (time) => {
    setFormData({ ...formData, time });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Details:", formData);
    alert("Appointment booked successfully!");
    // Add backend integration here (e.g., send data to server)
  };

  return (
    <Box
      className="bg-gradient-to-br from-blue-100 to-teal-200"
      sx={{
        height: "60vh", // Reduced height to 40% of the viewport
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "md",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
          }}
        >
          Book an Appointment
        </Typography>

        <Paper
          elevation={4}
          sx={{
            p: 2, // Compact padding for a smaller section
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight transparency for better gradient visibility
            backdropFilter: "blur(8px)", // Optional glass effect
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              {/* Name Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Phone Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  inputProps={{ pattern: "[0-9]{10}" }}
                  helperText="Enter a valid 10-digit phone number"
                />
              </Grid>

              {/* Date Picker */}
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Appointment Date"
                    value={formData.date}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    required
                  />
                </LocalizationProvider>
              </Grid>

              {/* Time Picker */}
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Appointment Time"
                    value={formData.time}
                    onChange={handleTimeChange}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    required
                  />
                </LocalizationProvider>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    fontWeight: "bold",
                    textTransform: "none",
                    py: 1,
                  }}
                >
                  Book Appointment
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default BookAppointment;
