import { Box, Typography } from "@mui/material";

const Synergizing = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "900px",
        mx: "auto",
        mt: 8,
        px: 2,
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          lineHeight: 1.2,
          color: "text.primary",
          mb: 2,
        }}
      >
        Synergizing Successful <br />
        Holistic IT Solutions
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: "text.secondary",
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        End-to-End IT Excellence: Consultation, Development, Managed Services,
        Cloud Computing, Staffing, Cybersecurity – Transforming Businesses
        Seamlessly.
      </Typography>
    </Box>
  );
};

export default Synergizing;
