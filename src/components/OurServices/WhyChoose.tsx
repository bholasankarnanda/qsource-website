"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const smooth = [
  {
    title: "IT Consulting",
    Description:
      "Navigate the complexities of the digital landscape with our expert IT consulting services. Unleash tailored strategies for optimal technology utilization, ensuring your business stays agile and ahead in today's dynamic market.",
  },
  {
    title: "Managed IT Services",
    Description:
      "Experience worry-free operations with our Managed IT Services. From proactive maintenance to rapid issue resolution, our comprehensive approach ensures your IT infrastructure runs smoothly, allowing you to focus on what matters – your business.",
  },
  {
    title: "Staffing and Recruitment",
    Description:
      "Build a powerhouse team with our strategic Staffing and Recruitment solutions. Access top-tier talent with precision, ensuring that your workforce is not just skilled for today, but ready to tackle the challenges of tomorrow.",
  },
  {
    title: "Software Development",
    Description:
      "Elevate your business with cutting-edge software solutions tailored to your unique needs. Our seasoned developers transform ideas into powerful applications, enhancing efficiency and delivering a seamless user experience.",
  },
  {
    title: "Cloud Computing Services",
    Description:
      "Embrace the future of business with our Cloud Computing Services. Seamlessly migrate and manage your data on secure, scalable cloud platforms, unlocking flexibility and efficiency for unprecedented growth.",
  },
  {
    title: "Cybersecurity Solutions",
    Description:
      "Guard your business against evolving threats with our Cybersecurity Solutions. Our robust strategies and cutting-edge technologies provide a shield for your digital assets, ensuring the utmost security in an interconnected world..",
  },
];

export default function WhyChoose() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#ffffff",
        position: "relative",
        py: { xs: 4, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        {/* SECTION HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 8 },
            position: "relative",
            maxWidth: 800,
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: { xs: 1.5, md: 2 }, // MOBILE FIX
              fontSize: { xs: "1.8rem", md: "3rem" },
              lineHeight: { xs: 1.3, md: 1.3 },
            }}
          >
            Unified Intelligent IT Solutions Hub
          </Typography>
        </Box>

        {/* SERVICES GRID */}
        <Grid
          container
          spacing={{ xs: 4, sm: 6, md: 10 }}
          justifyContent="center"
        >
          {smooth.map((smooth, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    background: "linear-gradient( rgb(228,243,255) 100%)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    mb: { xs: 0.8, md: 1 },
                  }}
                >
                  {smooth.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: { xs: 1.2, md: 2 },
                    lineHeight: { xs: 1.5, md: 1.8 },
                    textAlign: "left",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {smooth.Description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
