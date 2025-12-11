"use client";
import JobHeroSection from "@/components/jobs/JobHeroSection";
import RecruitingSection from "@/components/jobs/RecruitingSection";
import JobOpeningsSection from "@/components/jobs/JobOpeningsSection";
import ContactSection from "@/components/jobs/ContactSection";
import { Box, Divider } from "@mui/material";

const careers = () => {
  return (
    <Box sx={{ fontFamily: "Be Vietnam Pro", fontWeight: 800 }}>
      <JobHeroSection />
      <Divider sx={{ my: 2 }} />
      <RecruitingSection />
      <Divider sx={{ my: 2 }} />
      <JobOpeningsSection />
      <ContactSection />
    </Box>
  );
};
export default careers;
