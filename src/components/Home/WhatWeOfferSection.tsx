"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { getWhatWeOffer } from "@/lib/whatWeOffer";

interface SectionBlock {
  type: string;
  children: { type: string; text: string }[];
}

interface Section {
  id: number;
  Heading: string;
  Description: SectionBlock[];
  Image?: {
    url: string;
  } | null;
}

interface WhatWeOfferEntry {
  title: string;
  slug: string;
  sections: Section[];
}

export default function WhatWeOfferSection() {
  const [entry, setEntry] = React.useState<WhatWeOfferEntry | null>(null);

  React.useEffect(() => {
    async function load() {
      const data = await getWhatWeOffer();
      setEntry(data?.attributes || data);
    }
    load();
  }, []);
  if (!entry) return <div>Loading...</div>;

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
              {entry.title}
            </Typography>

            {/*  Strategic IT Solutions */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}
              >
                {entry.sections[0].Heading}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 2, lineHeight: 1.7 }}
              >
                {entry.sections[0].Description.map((block, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    component="span"
                    sx={{
                      display: "block",
                      color: "text.secondary",
                      mb: 2,
                      lineHeight: 1.7,
                    }}
                  >
                    {block.children[0].text}
                  </Typography>
                ))}
              </Typography>
            </Box>

            {/* Talent Empowerment Services */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}
              >
                {entry.sections[1].Heading}
              </Typography>

              {entry.sections[1].Description.map((block, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  component="span"
                  sx={{
                    display: "block",
                    color: "text.secondary",
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  {block.children[0].text}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
