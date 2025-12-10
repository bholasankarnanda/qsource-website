"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// Data for the Accreditation logos underneath
const accreditations = [
  { src: "/woman.png", alt: "Women Owned Certified" },
  { src: "/nmsdc.png", alt: "NMSDC Certified" },
  { src: "/wosb.jpg", alt: "SBA WOSB Certified" },
  { src: "/hub.png", alt: "HUB Certified" },
];

export default function PartnershipSection() {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        {/* --- PART 1: Partnership --- */}
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: "primary.main",
              mb: 4,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Partnership
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "60px", md: "80px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/uipath.png"
              alt="UiPath Partner"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>

        {/* --- PART 2: Accreditations --- */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 6,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Accreditations
          </Typography>

          {/* Grid of Accreditation Logos */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {accreditations.map((logo, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "80px", md: "100px" },
                    filter: "grayscale(100%)",
                    opacity: 0.8,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      opacity: 1,
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
