"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled component for the file upload button
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

// Custom Styled TextField
const CustomTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    fontFamily: '"Be Vietnam Pro", sans-serif',
    color: "#8A8A99",
    "&.Mui-focused": {
      color: "#1976d2",
    },
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#E0E0E0",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#B0B0B0",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1976d2",
  },
  "& .MuiInputBase-input": {
    fontFamily: '"Be Vietnam Pro", sans-serif',
    fontWeight: 500,
    color: "#1A1A24",
  },
});

const ContactSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">
        {/* The Grey Box Container */}
        <Box
          sx={{
            backgroundColor: "#F3F5F9", // Slightly cooler grey
            borderRadius: { xs: 4, md: 8 },
            px: { xs: 3, md: 4 },
            py: { xs: 8, md: 10 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden", // Clips the decorations
          }}
        >
          {/* --- DECORATION 1: Dot Grid Pattern (Top Right) --- */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: -20, md: 20 },
              right: { xs: -20, md: 20 },
              width: "200px",
              height: "200px",
              // Creates a clean tech dot pattern using CSS
              backgroundImage: "radial-gradient(#CBD5E1 2px, transparent 2px)",
              backgroundSize: "24px 24px",
              opacity: 0.6,
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* --- DECORATION 2: Soft Blue Glow (Bottom Left) --- */}
          <Box
            sx={{
              position: "absolute",
              bottom: -150,
              left: -100,
              width: "500px",
              height: "500px",
              background:
                "radial-gradient(circle, rgba(25, 118, 210, 0.08) 0%, rgba(25, 118, 210, 0) 70%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Headings */}
          <Box sx={{ mb: 8, position: "relative", zIndex: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontWeight: 800,
                color: "#1A1A24",
                fontSize: { xs: "2rem", md: "3.5rem" },
                mb: 1,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Unveil your professional story.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontWeight: 500,
                color: "#5A5A66",
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                letterSpacing: "-0.01em",
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Share your CV and illuminate the path to your future success.
            </Typography>
          </Box>

          {/* The Inner Form Area */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            {/* The White Card */}
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                p: { xs: 4, md: 8 },
                position: "relative",
                zIndex: 2,
                boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(0,0,0,0.02)",
              }}
            >
              <form noValidate autoComplete="off">
                <Stack spacing={5}>
                  {/* Row 1: Name & Email */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 4,
                    }}
                  >
                    <CustomTextField
                      fullWidth
                      label="Full name"
                      variant="standard"
                    />
                    <CustomTextField
                      fullWidth
                      label="Email Address"
                      variant="standard"
                    />
                  </Box>

                  {/* Row 2: Phone & Subject */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 4,
                    }}
                  >
                    <CustomTextField
                      fullWidth
                      label="Phone number"
                      variant="standard"
                    />
                    <CustomTextField
                      fullWidth
                      label="Subject"
                      variant="standard"
                    />
                  </Box>

                  {/* Row 3: Message */}
                  <CustomTextField
                    fullWidth
                    label="Your message"
                    multiline
                    rows={3}
                    variant="standard"
                  />

                  {/* Row 4: File Upload */}
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: '"Be Vietnam Pro", sans-serif',
                        color: "#5A5A66",
                        mb: 1.5,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      Upload resume
                    </Typography>
                    <Button
                      component="label"
                      variant="outlined"
                      sx={{
                        fontFamily: '"Be Vietnam Pro", sans-serif',
                        color: "#5A5A66",
                        borderColor: "#E0E0E0",
                        textTransform: "none",
                        borderRadius: 2,
                        padding: "12px 28px",
                        borderStyle: "dashed",
                        borderWidth: 1.5,
                        backgroundColor: "#FAFAFA",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "#1976d2",
                          color: "#1976d2",
                          backgroundColor: "rgba(25, 118, 210, 0.04)",
                          borderStyle: "dashed",
                          borderWidth: 1.5,
                        },
                      }}
                    >
                      Choose File
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </Box>

                  {/* Row 5: Submit Button */}
                  <Box sx={{ textAlign: "left", pt: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                        color: "#FFF",
                        borderRadius: "50px",
                        padding: "14px 50px",
                        fontFamily: '"Be Vietnam Pro", sans-serif',
                        fontWeight: 700,
                        textTransform: "none",
                        fontSize: "1rem",
                        boxShadow: "0 8px 25px rgba(25, 118, 210, 0.25)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 12px 30px rgba(25, 118, 210, 0.35)",
                        },
                      }}
                    >
                      Submit Application
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
