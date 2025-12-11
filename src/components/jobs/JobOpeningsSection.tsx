"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  TextField,
  useTheme,
  useMediaQuery,
  Fade,
} from "@mui/material";
import {
  X,
  ArrowLeft,
  Send,
  MapPin,
  Briefcase,
  Sparkles,
  ChevronRight,
  Clock,
} from "lucide-react";

// --- GLOBAL STYLES & FONTS ---
const GlobalStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      
      body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: #FFFFFF; /* Pure White Background */
        color: #0F172A;
        -webkit-font-smoothing: antialiased;
      }
      
      /* Smooth transitions for inputs */
      .MuiOutlinedInput-root {
        transition: all 0.2s ease-in-out;
      }
      .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #0286F8 !important;
        border-width: 1px !important;
        box-shadow: 0 0 0 4px rgba(2, 134, 248, 0.1);
      }
    `}
  </style>
);

// --- TYPES ---
interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  tags: string[];
  description: string;
  fullDetails: string;
}

interface ContactSectionProps {
  job: Job;
  onBack: () => void;
}

// --- DATA ---
const JOB_OPENINGS: Job[] = [
  {
    id: "12163",
    title: "DevOps Engineer",
    location: "Cypress, TX",
    type: "Full-time",
    tags: ["AWS", "CI/CD", "Jenkins"],
    description:
      "Design cloud infrastructure using AWS services to support scalable and reliable application performance.",
    fullDetails:
      "As a DevOps Engineer, you will work closely with development teams to implement CI/CD pipelines, manage AWS infrastructure, and ensure high availability. Experience with Terraform and Docker is highly desirable.",
  },
  {
    id: "12148",
    title: "Software Engineer",
    location: "Remote",
    type: "Contract",
    tags: ["React", "Node.js", "TypeScript"],
    description:
      "Develop and maintain web applications focusing on user experience, security, and scalability.",
    fullDetails:
      "We are looking for a full-stack engineer proficient in the MERN stack. You will be building customer-facing features and optimizing backend performance. This is a 6-month contract with potential for hire.",
  },
  {
    id: "12149",
    title: "Product Manager",
    location: "Austin, TX",
    type: "Full-time",
    tags: ["Agile", "Scrum", "Roadmapping"],
    description:
      "Lead the product vision and strategy, working closely with engineering and design teams.",
    fullDetails:
      "You will define the product roadmap, prioritize the backlog, and act as the bridge between stakeholders and the technical team. 3+ years of experience in SaaS product management required.",
  },
  {
    id: "12150",
    title: "Data Scientist",
    location: "Hybrid",
    type: "Full-time",
    tags: ["Python", "Machine Learning", "SQL"],
    description:
      "Analyze large datasets to derive actionable insights and build predictive models for business growth.",
    fullDetails:
      "Join our analytics team to build ML models that predict customer churn and optimize marketing spend. Proficiency in Pandas, Scikit-learn, and Tableau is essential.",
  },
];

// --- COMPONENTS ---

// 1. CONTACT / APPLY COMPONENT
const ContactSection: React.FC<ContactSectionProps> = ({ job, onBack }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application sent for ${job.title}! (Demo only)`);
    onBack(); // Go back to list after submit
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Button
          startIcon={<ArrowLeft size={18} />}
          onClick={onBack}
          sx={{
            mb: 4,
            color: "#64748B",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "50px",
            px: 3,
            "&:hover": {
              backgroundColor: "#F0F9FF",
              color: "#0F172A",
            },
          }}
        >
          Back to Job Listings
        </Button>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            border: "1px solid #E2E8F0",
            borderRadius: 4,
            // Enhanced shadow for white-on-white contrast
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.08)",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 800,
              mb: 1,
              color: "#0F172A",
            }}
          >
            Apply Now
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", mb: 5 }}>
            You are applying for the position of{" "}
            <Box component="span" sx={{ color: "#0286F8", fontWeight: 700 }}>
              {job.title}
            </Box>{" "}
            (ID: {job.id}).
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  required
                  InputProps={{ sx: { borderRadius: 2 } }}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  required
                  InputProps={{ sx: { borderRadius: 2 } }}
                />
              </Stack>

              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                required
                InputProps={{ sx: { borderRadius: 2 } }}
              />

              <TextField
                fullWidth
                label="Cover Letter / Message"
                multiline
                rows={5}
                variant="outlined"
                placeholder="Tell us why you are a good fit..."
                InputProps={{ sx: { borderRadius: 2 } }}
              />

              <Box sx={{ pt: 1 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<Send size={18} />}
                  sx={{
                    bgcolor: "#0286F8",
                    boxShadow: "0 4px 14px 0 rgba(2, 134, 248, 0.4)",
                    py: 1.5,
                    px: 5,
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "#0265D2",
                      boxShadow: "0 6px 20px rgba(2, 134, 248, 0.6)",
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  Submit Application
                </Button>
              </Box>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

// 2. MAIN APP COMPONENT
const JobOpeningsSection: React.FC = () => {
  // State for managing views and modal
  const [view, setView] = useState<"list" | "contact">("list"); // 'list' or 'contact'
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Handlers
  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleApplyNow = () => {
    setIsDialogOpen(false); // Close the details modal
    setView("contact"); // Switch entire view to contact component
  };

  const handleBackToList = () => {
    setView("list");
    setSelectedJob(null);
  };

  // If view is 'contact', render the contact component
  if (view === "contact" && selectedJob) {
    return (
      <>
        <GlobalStyles />
        <ContactSection job={selectedJob} onBack={handleBackToList} />
      </>
    );
  }

  // Otherwise render the Job List
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FFFFFF", // Pure White
        width: "100%",
        py: { xs: 8, md: 12 },
        minHeight: "100vh",
      }}
    >
      <GlobalStyles />
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="We're Hiring"
            icon={<Sparkles size={14} />}
            sx={{
              mb: 3,
              bgcolor: "rgba(2, 134, 248, 0.08)",
              color: "#0286F8",
              fontWeight: 600,
              border: "1px solid rgba(2, 134, 248, 0.2)",
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 900,
              color: "#0F172A",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            Current Job Openings
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Inter", sans-serif',
              color: "#64748B",
              fontSize: { xs: "1rem", md: "1.125rem" },
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Explore our latest career opportunities. Click on a job title to
            view full details.
          </Typography>
        </Box>

        {/* Job Cards Layout - using Stack with flexWrap instead of Grid */}
        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          spacing={4}
          justifyContent="center"
        >
          {JOB_OPENINGS.map((job) => (
            <Paper
              key={job.id}
              onClick={() => handleJobClick(job)} // Open Modal on Click
              className="group"
              elevation={0}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                p: 5,
                // Using calc to maintain your original layout logic
                width: { xs: "100%", md: "calc(50% - 16px)" },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                border: "1px solid #E2E8F0",
                // Subtle default shadow for separation from white background
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-6px)",
                  // Deeper shadow on hover
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderColor: "#0286F8",
                  "& .job-title": { color: "#0286F8" },
                  "& .arrow-icon": {
                    transform: "translateX(4px)",
                    color: "#0286F8",
                  },
                },
              }}
            >
              {/* Top Row: ID and Type */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    color: "#0286F8",
                    letterSpacing: "0.05em",
                    fontSize: "0.75rem",
                  }}
                >
                  ID: {job.id}
                </Typography>
                <Chip
                  label={job.type}
                  size="small"
                  sx={{
                    backgroundColor: "#E3F2FD",
                    color: "#0286F8",
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.75rem",
                    borderRadius: "6px",
                  }}
                />
              </Box>

              {/* Main Title */}
              <Typography
                className="job-title"
                variant="h4"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 800,
                  color: "#0F172A",
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  mb: 1,
                  transition: "color 0.3s ease",
                }}
              >
                {job.title}
              </Typography>

              {/* Location Subtitle */}
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 3, color: "#64748B" }}
              >
                <MapPin size={16} />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  {job.location}
                </Typography>
              </Stack>

              {/* Tech Stack Tags */}
              <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                {job.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "#E2E8F0",
                      backgroundColor: "#F8FAFC",
                      color: "#475569",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      borderRadius: "6px",
                    }}
                  />
                ))}
              </Stack>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  color: "#475569",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  mb: 4,
                  flexGrow: 1,
                }}
              >
                {job.description}
              </Typography>

              {/* Bottom Action Area */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "auto",
                  pt: 3,
                  borderTop: "1px solid #F1F5F9",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#0F172A",
                  }}
                >
                  View Details
                </Typography>
                <Box
                  className="arrow-icon"
                  component="span"
                  sx={{
                    ml: 1.5,
                    display: "flex",
                    alignItems: "center",
                    color: "#0F172A",
                    transition: "transform 0.3s ease, color 0.3s ease",
                  }}
                >
                  <ChevronRight size={18} />
                </Box>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>

      {/* --- JOB DETAILS DIALOG --- */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        TransitionComponent={Fade}
        PaperProps={{
          sx: {
            borderRadius: 3,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        {selectedJob && (
          <Box sx={{ p: 1 }}>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", pt: 1, pr: 1 }}
            >
              <IconButton onClick={handleCloseDialog} sx={{ color: "#94A3B8" }}>
                <X size={24} />
              </IconButton>
            </Box>

            <DialogTitle component="div" sx={{ pt: 0, pb: 2, px: 4 }}>
              <Chip
                label={selectedJob.type}
                size="small"
                sx={{
                  mb: 2,
                  bgcolor: "#E3F2FD",
                  color: "#0286F8",
                  fontWeight: 600,
                  borderRadius: "6px",
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#0F172A",
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                {selectedJob.title}
              </Typography>
              <Stack
                direction="row"
                spacing={3}
                sx={{ mt: 2, color: "#64748B" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MapPin size={16} />
                  <Typography variant="body2" fontWeight={500}>
                    {selectedJob.location}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Clock size={16} />
                  <Typography variant="body2" fontWeight={500}>
                    Posted recently
                  </Typography>
                </Box>
              </Stack>
            </DialogTitle>

            <DialogContent dividers sx={{ borderColor: "#E2E8F0", p: 4 }}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1, color: "#0F172A" }}
                >
                  Role Overview
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#475569", lineHeight: 1.7 }}
                >
                  {selectedJob.fullDetails || selectedJob.description}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 2, color: "#0F172A" }}
                >
                  Requirements & Tech Stack
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ gap: 1 }}
                >
                  {selectedJob.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      sx={{
                        bgcolor: "white",
                        color: "#475569",
                        border: "1px solid #E2E8F0",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                p: 3,
                pt: 2,
                justifyContent: "space-between",
                borderTop: "1px solid #F8FAFC",
              }}
            >
              <Button
                onClick={handleCloseDialog}
                sx={{
                  color: "#64748B",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleApplyNow}
                endIcon={<ChevronRight size={16} />}
                sx={{
                  bgcolor: "#0286F8",
                  boxShadow: "0 4px 6px -1px rgba(2, 134, 248, 0.2)",
                  px: 4,
                  py: 1,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  "&:hover": {
                    bgcolor: "#0265D2",
                    boxShadow: "0 10px 15px -3px rgba(2, 134, 248, 0.3)",
                  },
                }}
              >
                Apply Now
              </Button>
            </DialogActions>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default JobOpeningsSection;
