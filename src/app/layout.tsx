import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Toolbar, Container } from "@mui/material";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "QSource - Enterprise IT Services Company",
  description:
    "QSource is a leading Enterprise IT Services Company providing innovative solutions to businesses worldwide. Explore our services today!",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "QSource",
    "Enterprise IT Services",
    "IT Solutions",
    "Business Technology",
    "IT Consulting",
    "Managed IT Services",
    "Cloud Services",
    "Cybersecurity",
    "Digital Transformation",
    "Tech Support",
  ],
  authors: [{ name: "QSource", url: "https://www.qsource.com" }],
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
