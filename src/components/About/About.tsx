"use client";
import Image from "next/image";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ComputerIcon from "@mui/icons-material/Computer";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FactoryIcon from "@mui/icons-material/Factory";
import GavelIcon from "@mui/icons-material/Gavel";
import StorefrontIcon from "@mui/icons-material/Storefront";

import { Container, Typography, Box, Card, CardContent, Grid } from "@mui/material";

// ICON MAP
const industryIcons: Record<string, React.ReactNode> = {
  Healthcare: <LocalHospitalIcon sx={{ fontSize: 42, mb: 1 }} />,
  Technology: <ComputerIcon sx={{ fontSize: 42, mb: 1 }} />,
  Finance: <AccountBalanceIcon sx={{ fontSize: 42, mb: 1 }} />,
  Manufacturing: <FactoryIcon sx={{ fontSize: 42, mb: 1 }} />,
  Government: <GavelIcon sx={{ fontSize: 42, mb: 1 }} />,
  Retail: <StorefrontIcon sx={{ fontSize: 42, mb: 1 }} />,
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

  const certifications = ["/woman.png", "/uipath.png", "/hub.png", "/wosb.jpg", "/nmsdc.png"];

 
 

  return (
    <Container maxWidth="lg" sx={{ pt: 5, pb: 10 }}>
      {/* HEADER */}
      <Box
       
        textAlign="center"
        mb={6}
        sx={{
          background:"linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
          p: 6,
          borderRadius: 4,
          color: "white",
          boxShadow: 5,
        }}
      >
        <Typography variant="h3" fontWeight={700} fontSize="1.6rem" mb={2} gutterBottom>
          About QSource Group
        </Typography>
        <Typography variant="h6" maxWidth="700px" mx="auto">
          Delivering workforce, IT, and professional solutions with a focus on quality,
          responsiveness, and long-lasting partnerships.
        </Typography>
      </Box>

      {/* WHO WE ARE */}
      <Grid container spacing={4} columns={12} alignItems="center" mb={10}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" textAlign="center" fontWeight={700} mb={2}>
            Who We Are
          </Typography>

          <Typography
            color="text.secondary"
            lineHeight={1.8}
            fontWeight={600}
            textAlign="center"
            fontSize="1.2rem"
          >
            QSource Group is a workforce and technology solutions provider offering staffing,
            consulting, and IT services. We help organizations scale confidently and reach
            sustainable business goals.
          </Typography>
        </Grid>
      </Grid>

      {/* PRINCIPLES */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={6}
        color="text.primary"
      >
        Our Principles
      </Typography>

      <Grid container spacing={4} columns={12} mb={12}>
        {principles.map((p) => (
          <Grid key={p.title} size={{ xs: 12, md: 4 }} >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                p: 3,
                textAlign: "center",
                backgroundColor: "#F8FAFC",
                transition: "0.35s",
                height: "100%",

                "&:hover": {
                  backgroundColor: "#DBEAFE",
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
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

      {/* INDUSTRIES */}
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={6}>
        Industries We Serve
      </Typography>

      <Grid container spacing={4} columns={12} mb={12}>
        {industries.map((industry) => (
          <Grid key={industry} size={{ xs: 12, md: 4 }} >
            <Card
              sx={{
                textAlign: "center",
                p: 4,
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "#EFF6FF",
                transition: "0.35s",
                color: "#1E3A8A",

                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 7,
                  backgroundColor: "#DBEAFE",
                },
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

      {/* CERTIFICATIONS */}
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={6}>
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
              transition: "0.35s",

              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: 7,
                backgroundColor: "#E0F2FE",
              },
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
    </Container>
  );
};

export default AboutPage;
