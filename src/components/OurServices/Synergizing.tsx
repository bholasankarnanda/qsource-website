import { Box, Divider, Typography } from "@mui/material";

const Synergizing = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "900px",
        mx: "auto",
        mt: 8,
        px: 2,
        xs: 12,
        sm: 6,
        md: 4,
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 800,
          color: "text.primary",
          mb: 2,
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Synergizing Successful Holistic IT Solutions
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: "1.1rem",
          lineHeight: 1.6,
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
