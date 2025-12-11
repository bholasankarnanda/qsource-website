"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const smooth = [
  {
    title: "Strategic IT Solutions",
    Description:
      "Embark on a journey of innovation and efficiency with our Strategic IT Solutions. From insightful IT Consulting to bespoke Software Development, seamless Managed IT Services, and cutting-edge Cloud Computing, and Cybersecurity, we redefine excellence.",
  },
  {
    title: "Talent Empowerment Services",
    Description:
      "Unlock the potential of your workforce with our Talent Empowerment Services. Through meticulous Staffing and Recruitment, we connect you with the brightest talents, propelling your business towards unparalleled success.",
  },
];

export default function SmoothSailing() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 10 },
        bgcolor: "#ffffff",
        position: "relative",
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
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              mb: { xs: 1.5, md: 2 },
              fontSize: { xs: "1.8rem", md: "3rem" },
              lineHeight: { xs: 1.2, md: 1.3 },
            }}
          >
            Smooth Sailing: <br />
            Mastering IT Navigation
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: { xs: 1.45, md: 1.6 },
              maxWidth: "700px",
              mx: "auto",
              px: { xs: 1, md: 0 },
            }}
          >
            Navigating the IT maze like a boss – from brainstorming brilliance
            to cyber ninja moves, we ‘ ve got your business transformation on
            cruise control!
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
                    mb: { xs: 1, md: 2 },
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
