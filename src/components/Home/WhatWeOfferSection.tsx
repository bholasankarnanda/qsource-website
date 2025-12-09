"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function WhatWeOfferSection() {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          {/* COLUMN 1: The Illustration (Left Side) */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", md: "500px" }, // Responsive height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/Illustration-3.svg"
                alt="Strategic IT Solutions Illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>

          {/* COLUMN 2: Text Content (Right Side) */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Main Title */}
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                color: "text.primary",
                mb: 4,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              What We Offer?
            </Typography>

            {/*  Strategic IT Solutions */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}
              >
                Strategic IT Solutions:
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 2, lineHeight: 1.7 }}
              >
                Elevate your business to new heights with our Strategic IT
                Solutions. We specialize in crafting tailored, cutting-edge
                solutions that align seamlessly with your organizational goals.
                From robust cybersecurity frameworks to advanced cloud
                strategies.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.7 }}
              >
                Our team ensures that your technology not only meets the
                challenges of today but is future-proofed for tomorrow.
                Experience the power of innovation as we transform your IT
                landscape, providing a strategic edge that propels your business
                toward unparalleled success.
              </Typography>
            </Box>

            {/* Talent Empowerment Services */}
            <Box>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}
              >
                Talent Empowerment Services:
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 2, lineHeight: 1.7 }}
              >
                Unlock the full potential of your workforce with our Talent
                Empowerment Services. We go beyond traditional staffing,
                offering comprehensive programs that nurture skills, foster
                innovation, and cultivate a culture of continuous learning.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.7 }}
              >
                Our commitment is not just to fill positions but to empower
                individuals with the expertise needed to thrive in the
                ever-evolving tech landscape. Partner with us to build a
                resilient, high-performance team that not only leads your
                organization into a future defined by agility and excellence.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
