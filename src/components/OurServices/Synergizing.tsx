import { Box, Typography } from "@mui/material";

const Synergizing = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "900px",
        mx: "auto",
        mt: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 800,
          color: "text.primary",
          mb: { xs: 1, md: 2 },
          fontSize: { xs: "1.8rem", md: "3rem" },
        }}
      >
        Synergizing Successful Holistic IT Solutions
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "1rem", md: "1.1rem" },
          lineHeight: { xs: 1.4, md: 1.6 },
          maxWidth: "700px",
          mx: "auto",
        }}
      >
        End-to-End IT Excellence: Consultation, Development, Managed Services,
        Cloud Computing, Staffing, Cybersecurity – Transforming Businesses
        Seamlessly.​
      </Typography>
    </Box>
  );
};

export default Synergizing;
