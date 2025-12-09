"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Image from "next/image";

// Data for the 3 steps shown in the image
const steps = [
  {
    id: 1,
    title: "Understand Client Needs:",
    description:
      "Understanding your needs and challenges is the initial step. Through meetings, workshops, and assessments, our team engages with you to create tailored solutions aligned with your strategy.",
  },
  {
    id: 2,
    title: "Customized Solution Design and Proposal:",
    description:
      "We tailor solutions to your needs, which may combine software development, infrastructure enhancement, and staffing. A collaborative proposal detailing solutions, timeline, budget, and outcomes is provided to ensure continuous alignment with your expectations.",
  },
  {
    id: 3,
    title: "Implementation and Ongoing Support:",
    description:
      "Upon your approval, we seamlessly transition to implementation, deploying tailored solutions. Post-implementation, we offer continuous support, and monitor for optimal functionality and adaptability to evolving business needs.",
  },
];

export default function HowWeWorkSection() {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          {/* COLUMN 1: The Process List (Left Side) */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Section Label */}
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                mb: 4,
                display: "block",
                fontSize: "1.1rem",
              }}
            >
              How We Work?
            </Typography>

            <Box>
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Step Item Container */}
                  <Box sx={{ display: "flex", gap: 3, mb: 4 }}>
                    {/* The Number Circle */}
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                        mt: 0.5,
                      }}
                    >
                      {step.id}
                    </Box>

                    {/* Text Content */}
                    <Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: 700, color: "text.primary", mb: 1.5 }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary", lineHeight: 1.7 }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>

                  {index < steps.length - 1 && (
                    <Divider
                      sx={{ ml: 7, mb: 4, borderColor: "rgba(0,0,0,0.08)" }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Grid>

          {/* COLUMN 2: The Team Image (Right Side) */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", md: "600px" },
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src="/project.jpg"
                alt="Team collaborating on a project"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
