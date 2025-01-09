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
  };

  return (
    <Box
      className="bg-gradient-to-br from-blue-100 to-teal-200"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: "md",
              width: "100%",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                mb: 3,
                color: "black",
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              Book an Appointment
            </Typography>

            <Paper
              elevation={6}
              sx={{
                p: 3,
                borderRadius: "24px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {/* Name Field */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: "white",
                      }}
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
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: "white",
                      }}
                    />
                  </Grid>

                  {/* Date Picker */}
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Appointment Date"
                        value={formData.date}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
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
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                        required
                      />
                    </LocalizationProvider>
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        fontWeight: "bold",
                        textTransform: "none",
                        py: 1.5,
                        borderRadius: "12px",
                        background:
                          "linear-gradient(90deg, rgba(0,176,255,1) 0%, rgba(0,212,255,1) 100%)",
                        color: "white",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, rgba(0,176,255,1) 0%, rgba(0,176,200,1) 100%)",
                          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                    >
                      Book Appointment
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="download-removebg-preview (1).png"
            alt="Appointment Illustration"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0px 6px 12px rgb(244, 237, 255)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookAppointment;
