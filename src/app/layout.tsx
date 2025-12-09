import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Toolbar, Container } from "@mui/material";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";

export const metadata: Metadata = {
  title: "QSource Landing",
  description: "Enterprise IT Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />

          <Box
            component="main"
            sx={{
              minHeight: "80vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Toolbar />
            <Container maxWidth="xl" sx={{ flexGrow: 1, py: 3 }}>
              {children}
            </Container>
          </Box>

          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
