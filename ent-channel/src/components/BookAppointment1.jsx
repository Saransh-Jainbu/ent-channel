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

const BookAppointment1 = () => {
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
      sx={{
        px: 4,
        py: 8,
        maxWidth: "md",
        mx: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 3,
        }}
      >
        Book an Appointment
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "16px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
                  py: 1.5,
                }}
              >
                Book Appointment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default BookAppointment1;
