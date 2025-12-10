import { Be_Vietnam_Pro } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const be_Vietnam_Pro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#4caf50",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: be_Vietnam_Pro.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
