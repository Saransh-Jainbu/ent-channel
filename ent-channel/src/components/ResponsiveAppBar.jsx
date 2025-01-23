import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const pages = [
  { name: "About Us", id: "why-choose-us" },
  { name: "Contact Us", id: "visit-us" },
  { name: "Book Appointment", id: "appointment" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showYouTube, setShowYouTube] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    handleCloseNavMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollPosition = () => {
    if (window.scrollY > 100) {
      setShowScrollTop(true);
      setShowWhatsApp(true);
      setShowYouTube(true);
    } else {
      setShowScrollTop(false);
      setShowWhatsApp(false);
      setShowYouTube(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(135deg, #1e3c72, rgb(148, 228, 253))",
          backgroundBlendMode: "darken",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "'Lato', sans-serif",
                fontWeight: 600,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
                padding: "5px 1px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#00BFFF",
                  transform: "scale(1.05)",
                  textShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Ent Channel
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={() => handleScroll(page.id)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => handleScroll(page.id)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                    letterSpacing: ".1rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#00BFFF",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Scroll to Top, WhatsApp, and YouTube Buttons */}
      {showScrollTop && (
        <>
          <IconButton
            onClick={scrollToTop}
            sx={{
              position: "fixed",
              bottom: 120, // Adjusted position for scroll to top
              right: 20,
              backgroundColor: "#00BFFF",
              color: "white",
              fontSize: "2rem",
              borderRadius: "50%",
              padding: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#00A3C7",
              },
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              bottom: 180, // Adjusted position to be close to scroll button
              right: 20,
              backgroundColor: "#25D366",
              color: "white",
              fontSize: "2rem",
              borderRadius: "50%",
              padding: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#128C7E",
              },
            }}
          >
            <WhatsAppIcon />
          </a>

          {/* YouTube Icon */}
          <a
            href="https://www.youtube.com/channel/UC_x5XG1OV2P6uYjRr8wAYeA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              bottom: 240, // Adjusted position to match the spacing
              right: 20,
              backgroundColor: "#FF0000",
              color: "white",
              fontSize: "2rem",
              borderRadius: "50%",
              padding: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#FF3333",
              },
            }}
          >
            <YouTubeIcon />
          </a>
        </>
      )}
    </>
  );
}

export default ResponsiveAppBar;
