"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// Import Icons
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SecurityIcon from "@mui/icons-material/Security";

// Data Array for the Service Cards
const services = [
  {
    title: "IT Consulting",
    icon: <DisplaySettingsIcon sx={{ fontSize: 40 }} />,
  },
  { title: "Software Development", icon: <CodeIcon sx={{ fontSize: 40 }} /> },
  {
    title: "AI & ML Solutions",
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
  },
  { title: "Cloud Computing", icon: <CloudQueueIcon sx={{ fontSize: 40 }} /> },
  {
    title: "Staffing and Recruitment",
    icon: <GroupAddIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Cybersecurity Solutions",
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
  },
];

export default function ServicesSection() {
  return (
    <Box
      component="section"
      sx={{ py: 10, bgcolor: "#ffffff", position: "relative" }}
    >
      <Container maxWidth="xl">
        {/* SECTION HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
            position: "relative",
            maxWidth: 800,
            mx: "auto",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Driving success through tailored IT
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Empower your business with our comprehensive suite of IT solutions,
            including strategic consulting, bespoke software development,
            managed services, cloud computing, staffing, recruitment expertise,
            and robust cybersecurity solutions for seamless digital
            transformation.
          </Typography>
        </Box>

        {/* SERVICES GRID */}
        {/* spacing={3} adds gap between cards */}
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }}>
              <Paper
                elevation={0} // No shadow by default (flat look)
                sx={{
                  bgcolor: "#f8f9fa", // Very light grey background like image
                  p: 3, // Padding inside card
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: 3, // Soft rounded corners
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  border: "1px solid transparent",
                  "&:hover": {
                    transform: "translateY(-5px)", // Lifts up slightly
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                    borderColor: "primary.light", // Highlights border on hover
                    "& .icon-box": {
                      color: "primary.main", // Change icon color on hover
                    },
                  },
                }}
              >
                {/* Icon Container */}
                <Box
                  className="icon-box"
                  sx={{
                    color: "#546e7a", // Default Slate Grey color
                    mb: 2,
                    transition: "color 0.3s",
                  }}
                >
                  {service.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
