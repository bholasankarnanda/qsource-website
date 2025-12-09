"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: 6,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", lineHeight: 1.8 }}
            >
              17302 House & Hahl Rd , Suite #310
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", lineHeight: 1.8 }}
            >
              Cypress, Texas, 77433 , United States.
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{ textAlign: { xs: "left", md: "center" } }}
          >
            {/* 4. Use text.secondary (Muted/Light Text) */}
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
                display: "block",
                mb: 0.5,
              }}
            >
              Call Us Directly
            </Typography>
            <Link
              href="tel:832-400-2629"
              underline="none"
              sx={{ color: "inherit" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                832-400-2629
              </Typography>
            </Link>
          </Grid>

          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ textAlign: { xs: "left", md: "right" } }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
                display: "block",
                mb: 0.5,
              }}
            >
              Mail Us Directly
            </Typography>
            <Link
              href="mailto:hr@qsourcegroupinc.com"
              underline="none"
              sx={{ color: "inherit" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                hr@qsourcegroupinc.com
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
