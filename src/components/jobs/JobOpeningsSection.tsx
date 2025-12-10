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
} from "@mui/material";
import { X, ArrowLeft, Send } from "lucide-react"; // Using Lucide for icons

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
    <Box sx={{ py: 8, backgroundColor: "#FFFFFF", minHeight: "100vh"}}>
      <Container maxWidth="md">
        <Button
          startIcon={<ArrowLeft size={20} />}
          onClick={onBack}
          sx={{
            mb: 4,
            color: "#5A5A66",
            textTransform: "none",
            fontWeight: 600,
            
          }}
        >
          Back to Job Listings
        </Button>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            border: "1px solid #EAECF0",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontWeight: 800,
              mb: 1,
              color: "#1A1A24",
            }}
          >
            Apply Now
          </Typography>
          <Typography variant="body1" sx={{ color: "#5A5A66", mb: 4 }}>
            You are applying for the position of{" "}
            <Box component="span" sx={{ color: "#1976d2", fontWeight: 700 }}>
              {job.title}
            </Box>{" "}
            (ID: {job.id}).
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  required
                />
              </Box>

              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                required
              />

              <TextField
                fullWidth
                label="Cover Letter / Message"
                multiline
                rows={4}
                variant="outlined"
                placeholder="Tell us why you are a good fit..."
              />

              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<Send size={18} />}
                  sx={{
                    bgcolor: "#1976d2",
                    boxShadow: "none",
                    py: 1.5,
                    px: 4,
                    textTransform: "none",
                    fontWeight: 700,
                    "&:hover": { bgcolor: "#1565c0", boxShadow: "none" },
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
const App: React.FC = () => {
  // State for managing views and modal
  const [view, setView] = useState<"list" | "contact">("list"); // 'list' or 'contact'
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

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
    return <ContactSection job={selectedJob} onBack={handleBackToList} />;
  }

  // Otherwise render the Job List
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        py: { xs: 8, md: 12 },
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontWeight: 800,
              color: "#1A1A24",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
            }}
          >
            Current Job Openings
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              color: "#5A5A66",
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

        {/* Job Cards Layout */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {JOB_OPENINGS.map((job) => (
            <Paper
              key={job.id}
              onClick={() => handleJobClick(job)} // Open Modal on Click
              elevation={0}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 3,
                p: 5,
                width: { xs: "100%", md: "calc(50% - 16px)" },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                border: "1px solid #EAECF0",
                boxShadow: "none",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 12px 32px rgba(25, 118, 210, 0.15)",
                  borderColor: "#1976d2",
                  "& .job-title": { color: "#1976d2" },
                  "& .arrow-icon": {
                    transform: "translateX(4px)",
                    color: "#1976d2",
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
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                    fontWeight: 700,
                    color: "#1976d2",
                    letterSpacing: "0.05em",
                    fontSize: "0.75rem",
                  }}
                >
                  JOB ID: {job.id}
                </Typography>
                <Chip
                  label={job.type}
                  size="small"
                  sx={{
                    backgroundColor: "#e3f2fd",
                    color: "#1976d2",
                    fontWeight: 600,
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                    fontSize: "0.75rem",
                  }}
                />
              </Box>

              {/* Main Title */}
              <Typography
                className="job-title"
                variant="h4"
                sx={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontWeight: 800,
                  color: "#283646",
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  mb: 1,
                  transition: "color 0.3s ease",
                }}
              >
                {job.title}
              </Typography>

              {/* Location Subtitle */}
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  color: "#8A8A99",
                  fontWeight: 500,
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                📍 {job.location}
              </Typography>

              {/* Tech Stack Tags */}
              <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                {job.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "#E0E0E0",
                      backgroundColor: "#FAFAFA",
                      color: "#5A5A66",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Stack>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  color: "#5A5A66",
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
                  borderTop: "1px solid #F2F4F7",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#1A1A24",
                  }}
                >
                  View Details
                </Typography>
                <Box
                  className="arrow-icon"
                  component="span"
                  sx={{
                    ml: 1.5,
                    fontSize: "1.2rem",
                    color: "#1A1A24",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    display: "inline-block",
                  }}
                >
                  →
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* --- JOB DETAILS DIALOG --- */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3, p: 2 },
        }}
      >
        {selectedJob && (
          <>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={handleCloseDialog}>
                <X size={24} />
              </IconButton>
            </Box>

            {/* Fix: Changed DialogTitle component to 'div' to prevent invalid HTML nesting.
                            Default DialogTitle is 'h2'. Nesting 'h4' (Typography) and 'div' (Chip) inside 'h2' is invalid.
                        */}
            <DialogTitle component="div" sx={{ pt: 0, pb: 1 }}>
              <Chip
                label={selectedJob.type}
                size="small"
                sx={{
                  mb: 1,
                  bgcolor: "#e3f2fd",
                  color: "#1976d2",
                  fontWeight: 600,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#1A1A24",
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                }}
              >
                {selectedJob.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#8A8A99",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                }}
              >
                📍 {selectedJob.location} • ID: {selectedJob.id}
              </Typography>
            </DialogTitle>

            <DialogContent dividers sx={{ borderColor: "#F2F4F7" }}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1, color: "#283646" }}
                >
                  Role Overview
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#5A5A66", lineHeight: 1.7 }}
                >
                  {selectedJob.fullDetails || selectedJob.description}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1.5, color: "#283646" }}
                >
                  Requirements & Tech Stack
                </Typography>
                <Stack direction="row" spacing={1}>
                  {selectedJob.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      sx={{ bgcolor: "#F2F4F7", color: "#5A5A66" }}
                    />
                  ))}
                </Stack>
              </Box>
            </DialogContent>

            <DialogActions
              sx={{ p: 3, pt: 2, justifyContent: "space-between" }}
            >
              <Button
                onClick={handleCloseDialog}
                sx={{ color: "#5A5A66", textTransform: "none" }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleApplyNow}
                sx={{
                  bgcolor: "#1976d2",
                  boxShadow: "none",
                  px: 4,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "1rem",
                  "&:hover": { bgcolor: "#1565c0", boxShadow: "none" },
                }}
              >
                Apply Now
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default App;
