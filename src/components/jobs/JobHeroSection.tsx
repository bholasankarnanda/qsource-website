"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";

const JobHeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        // Matches the light blue/grey background from the image
        // backgroundColor: '#F3F6FA',
        bgcolor: "light",
        p: 2,
        width: "100%",
        // Vertical padding adapted to look balanced
        py: { xs: 8, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        {/* Main Title */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Be Vietnam Pro", sans-serif',
            fontWeight: 800,
            color: "#0F172A",
            fontSize: { xs: "3rem", md: "4.5rem" },
            lineHeight: 1.1, // Tighter line height for large text
            letterSpacing: "-0.03em",
            mb: 2,
          }}
        >
          Find Jobs
        </Typography>

        {/* Subtitle Description */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Be Vietnam Pro", sans-serif',
            color: "#5A5A66", // Muted grey for description
            fontWeight: 400,
            fontSize: { xs: "1rem", md: "1.25rem" }, // ~18px on desktop
            lineHeight: 1.1,
            maxWidth: "700px",
            mx: "auto", // Center horizontally
          }}
        >
          Dive into a world of career possibilities with us - where job hunting
          feels more like a treasure hunt, and your next opportunity is the
          ultimate hidden gem!
        </Typography>
      </Container>
    </Box>
  );
};

export default JobHeroSection;
