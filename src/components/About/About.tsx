"use client";
import React from "react";
import Image from "next/image";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ComputerIcon from "@mui/icons-material/Computer";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FactoryIcon from "@mui/icons-material/Factory";
import GavelIcon from "@mui/icons-material/Gavel";
import StorefrontIcon from "@mui/icons-material/Storefront";

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

// ICON MAP
const industryIcons: Record<string, React.ReactNode> = {
  Healthcare: <LocalHospitalIcon sx={{ fontSize: 40, mb: 1 }} />,
  Technology: <ComputerIcon sx={{ fontSize: 40, mb: 1 }} />,
  Finance: <AccountBalanceIcon sx={{ fontSize: 40, mb: 1 }} />,
  Manufacturing: <FactoryIcon sx={{ fontSize: 40, mb: 1 }} />,
  Government: <GavelIcon sx={{ fontSize: 40, mb: 1 }} />,
  Retail: <StorefrontIcon sx={{ fontSize: 40, mb: 1 }} />,
};

const AboutPage = () => {
  const principles = [
    {
      title: "Mission",
      text: "To provide dependable staffing, consulting, and technology services that support client growth and operational excellence.",
    },
    {
      title: "Vision",
      text: "To become a trusted partner recognized for reliability, expertise, and long-term value.",
    },
    {
      title: "Values",
      text: "Integrity, accountability, quality, and a relentless focus on delivering results aligned with client goals.",
    },
  ];

  const industries = [
    "Healthcare",
    "Technology",
    "Finance",
    "Manufacturing",
    "Government",
    "Retail",
  ];

  const certifications = [
    "/woman.png",
    "/uipath.png",
    "/hub.png",
    "/wosb.jpg",
    "/nmsdc.png",
  ];

  return (
    <Container maxWidth="lg" sx={{ pt: 5, pb: 10 }}>
      {/* HEADER */}
      <Box
        textAlign="center"
        mb={6}
        sx={{
          background: "linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)",
          p: 6,
          borderRadius: 4,
          color: "white",
          boxShadow: 6,
        }}
      >
        <Typography variant="h3" fontWeight={700} gutterBottom>
          About QSource Group
        </Typography>
        <Typography variant="h6" maxWidth="700px" mx="auto">
          Delivering workforce, IT, and professional solutions with a focus on
          quality, responsiveness, and long-lasting partnerships.
        </Typography>
      </Box>

      {/* WHO WE ARE (image removed) */}
      <Grid container spacing={4} columns={12} alignItems="center" mb={10}>
        <Grid size={{ xs: 12, md: 12 }} />

        <Grid
          size={{ xs: 12, md: 12 }}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Typography
            variant="h4"
            color="text.primary"
            textAlign="center"
            fontWeight={700}
            mb={2}
          >
            Who We Are
          </Typography>
          <Typography
            color="text.secondary"
            lineHeight={1.8}
            fontWeight={700}
            fontSize="1.3rem"
          >
            QSource Group is a workforce and technology solutions provider
            offering staffing, consulting, and IT services. We help
            organizations scale confidently and reach sustainable business
            goals.
          </Typography>
        </Grid>
      </Grid>

      {/* PRINCIPLES */}
      <Box mb={12}>
        <Typography
          variant="h4"
          color="text.primary"
          fontWeight={700}
          textAlign="center"
          mb={6}
        >
          Our Principles
        </Typography>

        <Grid container spacing={4} columns={12}>
          {principles.map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  p: 3,
                  textAlign: "center",
                  bgcolor: "#e3f2fd",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },

                  /* FIX: equal card height */
                  height: "100%",
                  minHeight: "230px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={700} mb={1}>
                    {p.title}
                  </Typography>
                  <Typography color="text.secondary">{p.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* INDUSTRIES */}
      <Box mb={12}>
        <Typography
          variant="h4"
          color="text.primary"
          fontWeight={700}
          textAlign="center"
          mb={6}
        >
          Industries We Serve
        </Typography>

        <Grid container spacing={4} columns={12}>
          {industries.map((industry) => (
            <Grid key={industry} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 4,
                  bgcolor: "#90caf9",
                  color: "#0D47A1",
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.07)", boxShadow: 6 },
                  width: "100%",
                }}
              >
                {industryIcons[industry]}
                <Typography fontWeight={700} fontSize="1.2rem">
                  {industry}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CERTIFICATIONS */}
      <Box textAlign="center" mb={10}>
        <Typography variant="h4" color="text.primary" fontWeight={700} mb={6}>
          Certifications
        </Typography>

        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={5}>
          {certifications.map((cert) => (
            <Box
              key={cert}
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                bgcolor: "white",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.08)", boxShadow: 6 },
              }}
            >
              <Image
                src={cert}
                width={120}
                height={60}
                alt={cert}
                style={{ objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
