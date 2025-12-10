"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const GreenSwoosh = () => (
  <Box
    component="svg"
    viewBox="0 0 200 20"
    data-testid="green-swoosh"
    sx={{
      position: "absolute",
      bottom: { xs: -5, md: -10 },
      left: 0,
      width: "100%",
      height: "auto",
      zIndex: 0,
    }}
  >
    <path
      d="M5 15 Q 100 5, 195 10"
      fill="none"
      stroke="#4caf50"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </Box>
);

export default function HeroSection() {
  return (
    <Box component="section" sx={{ width: "100%", mb: 6 }}>
      <Container maxWidth="xl">
        {/* The Main Blue Card */}
        <Box
          sx={{
            // The Gradient Background
            background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
            borderRadius: { xs: 4, md: 8 }, // Rounded corners
            color: "#ffffff", // White text
            textAlign: "center",
            py: { xs: 8, md: 10 }, // Vertical padding
            px: { xs: 2, md: 4 }, // Horizontal padding
            boxShadow: "0px 10px 40px rgba(25, 118, 210, 0.2)", // Soft blue shadow
            position: "relative",
            overflow: "hidden", // Ensures nothing spills out
          }}
        >
          {/* Background Decor Elements (Optional - adds subtle texture) */}
          <Box
            sx={{
              position: "absolute",
              top: -50,
              left: -50,
              width: 200,
              height: 200,
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              filter: "blur(40px)",
            }}
          />

          {/* The Headline */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "3rem", md: "6rem" },
              mb: 2,
              letterSpacing: -0.5,
            }}
          >
            Empowering your{" "}
            <Box
              component="span"
              sx={{ position: "relative", display: "inline-block" }}
            >
              Enterprise
              <GreenSwoosh />
            </Box>
          </Typography>

          {/* The Subheadline */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.4rem", md: "3rem" },
              mb: 3,
              opacity: 0.95,
            }}
          >
            Your Partner in Comprehensive IT Services
          </Typography>

          {/* 5. The Description Text */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              mb: 5,
              opacity: 0.85,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.6,
            }}
          >
            Transform your challenges into triumphs with our comprehensive IT
            solutions. Your success story begins with our expertise.
          </Typography>

          {/* The Call To Action Button */}
          <Button
            component={Link}
            href="/ourservices"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: "#ffffff",
              color: "primary.main",
              fontWeight: "bold",
              borderRadius: "50px",
              padding: "12px 32px",
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                transform: "scale(1.05)",
              },
            }}
          >
            Explore Our Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
