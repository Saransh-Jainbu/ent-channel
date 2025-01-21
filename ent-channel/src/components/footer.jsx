
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const footerPages = [
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "Privacy Policy", id: "privacy" },
];

const Footer = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <AppBar
            position="static"
            sx={{
                top: "auto",
                bottom: 0,
                background: "linear-gradient(135deg, #1e3c72, rgb(148, 228, 253))",
                backgroundBlendMode: "darken",
                boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="body1"
                        color="inherit"
                        sx={{ flexGrow: 1, textAlign: "center" }}
                    >
                        &copy; 2025 Dr.Ajay Jain Ent Channel. All rights reserved.
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        {footerPages.map((page) => (
                            <Button
                                key={page.id}
                                onClick={() => handleScroll(page.id)}
                                sx={{
                                    color: "white",
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
    );
};

export default Footer;