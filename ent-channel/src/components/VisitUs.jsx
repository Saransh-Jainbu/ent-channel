import React from "react";
import { Box, Typography, Button, Paper, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { motion } from "framer-motion";

const VisitUs = () => {
  const googleMapsLink = "https://maps.app.goo.gl/B9QueZj65FfKWChr9";
  const appleMapsLink =
    "https://beta.maps.apple.com/?auid=6087066322169405036&lsp=9902";

  return (
    <>
      <Box
        id="visit-us"
        sx={{
          px: 4,
          py: 8,
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 1, // Reduced margin-bottom
          }}
        >
          Visit Us
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontStyle: "italic",
            color: "text.secondary",
            textAlign: "center",
            mb: 6,
            mt: 1, // Added small margin-top for better spacing
          }}
        >
          "Experience the best care at the heart of Preet Vihar"
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Map Section */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              borderRadius: "16px",
              overflow: "visible", // Ensure no content is clipped
              boxShadow: 3,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5799048895674!2d77.2981841!3d28.6423502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb4fffb2ba09%3A0x75b612b2f95191d3!2sDr%20Ajay%20Jain&#39;s%20ENT%20Clinic!5e0!3m2!1sen!2sin!4v1735589541043!5m2!1sen!2sin&zoom=14"
              width="100%"
              height="100%"
              style={{
                border: "none",
                display: "block",
                minHeight: "400px", // Set a minimum height to avoid clipping
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                p: 2,
                background: "#fff",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                borderTop: "1px solid #ddd",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                href={googleMapsLink}
                target="_blank"
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  color: "#4285F4",
                  borderColor: "#4285F4",
                  ":hover": { backgroundColor: "#e8f0fe" },
                }}
              >
                Google Maps
              </Button>
              <Button
                variant="outlined"
                startIcon={<AppleIcon />}
                href={appleMapsLink}
                target="_blank"
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  color: "#000",
                  borderColor: "#000",
                  ":hover": { backgroundColor: "#f2f2f2" },
                }}
              >
                Apple Maps
              </Button>
            </Box>
          </Box>

          {/* Contact Details Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Address */}
            <Paper
              elevation={4}
              sx={{
                p: 3,
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <LocationOnIcon sx={{ fontSize: "2rem", color: "#1976D2" }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Our Address
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shop number 1,2,3 DDA Market-1, G-block, Preet Vihar, Vikas
                  Marg, Delhi-92.
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Landmark: Enter G-Block of Preet Vihar adjacent to Lajwab
                  Banquet hall or Shree Rathnam restaurant.
                </Typography>
              </Box>
            </Paper>

            {/* Timings */}
            <Paper
              elevation={4}
              sx={{
                p: 3,
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <AccessTimeIcon sx={{ fontSize: "2rem", color: "#1976D2" }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Working Hours
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mon-Sat: 10 AM - 1 PM & 5 PM - 8 PM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sun: Closed
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  (Please call the clinic for appointment before coming.)
                </Typography>
              </Box>
            </Paper>

            {/* Contact */}
            <Paper
              elevation={4}
              sx={{
                p: 3,
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <PhoneIcon sx={{ fontSize: "2rem", color: "#1976D2" }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  For Appointments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Call: 9871166370, 01141507370
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* Full-Width Fancy Animated Divider */}
      <div className="py-6">
        <motion.div
          className="border-t-4 border-gradient-to-r from-teal-400 via-blue-400 to-purple-500 w-screen mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </div>
    </>
  );
};

export default VisitUs;
