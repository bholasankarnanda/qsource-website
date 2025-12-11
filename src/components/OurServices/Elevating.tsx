import { Box, Stack, Typography, Paper } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import TimelineIcon from "@mui/icons-material/Timeline";
import WifiIcon from "@mui/icons-material/Wifi";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import BuildIcon from "@mui/icons-material/Build";

const services = [
  {
    title: "Tailored Solutions:",
    desc: "QSource stands out for its commitment to crafting bespoke IT solutions, precisely aligned with your business objectives, ensuring optimal performance and future scalability.",
    icon: <PersonIcon sx={{ fontSize: 45, color: "#6bbcff" }} />,
  },
  {
    title: "Strategic Vision:",
    desc: "With a strategic mindset, QSource transforms challenges into opportunities, providing immediate solutions while architecting a technology landscape that propels your business toward sustained success.",
    icon: <TimelineIcon sx={{ fontSize: 45, color: "#6bbcff" }} />,
  },
  {
    title: "Talent Empowerment:",
    desc: "Beyond staffing, QSource’s Talent Empowerment Services foster a culture of continuous learning, ensuring your workforce not only meets current demands but excels in tomorrow’s tech landscape.",
    icon: <WifiIcon sx={{ fontSize: 45, color: "#6bbcff" }} />,
  },
  {
    title: "Innovation Hub:",
    desc: "QSource serves as your innovation hub, constantly at the forefront of technological advancements, ensuring your business remains ahead in an ever-evolving digital environment.",
    icon: <FlashOnIcon sx={{ fontSize: 45, color: "#6bbcff" }} />,
  },
  {
    title: "Global Presence:",
    desc: "Choose QSource for a global partner with a local touch. Our extensive reach allows us to provide IT services and staffing solutions that cater to diverse business needs worldwide.",
    icon: <BuildIcon sx={{ fontSize: 45, color: "#6bbcff" }} />,
  },
];

export default function ServicesSection() {
  return (
    <Box sx={{ px: 5, py: 8, maxWidth: "1200px", mx: "auto" }}>
      <Stack spacing={8}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Elevating Your Business to Unprecedented Heights
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="space-between"
        >
          {services.slice(0, 2).map((item, i) => (
            <Stack
              key={i}
              direction="row"
              spacing={2}
              sx={{
                width: { xs: "100%", md: "48%" },
                padding: 3,
                "&:hover": {
                  transform: "translateY(-5px)",
                  background: "linear-gradient( rgb(228,243,255) 100%)",
                },
                borderRadius: 3,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {item.icon}
              <Box>
                <Typography variant="h5" fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography mt={1} color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="space-between"
        >
          {services.slice(2, 4).map((item, i) => (
            <Stack
              key={i}
              direction="row"
              spacing={2}
              sx={{
                width: { xs: "100%", md: "48%" },
                padding: 3,
                "&:hover": {
                  transform: "translateY(-5px)",
                  background: "linear-gradient( rgb(228,243,255) 100%)",
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                },
              }}
            >
              {item.icon}
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  {item.title}
                </Typography>
                <Typography mt={1} color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>

        <Stack>
          <Paper
            elevation={0}
            sx={{
              width: { xs: "100%", md: "48%" },
              padding: 3,
              "&:hover": {
                transform: "translateY(-5px)",
                background: "linear-gradient( rgb(228,243,255) 100%)",
                borderRadius: 3,
                cursor: "pointer",
                transition: "all 0.3s ease",
              },
            }}
          >
            <Stack direction="row" spacing={2}>
              {services[4].icon}
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  {services[4].title}
                </Typography>
                <Typography mt={1} color="text.secondary">
                  {services[4].desc}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </Box>
  );
}
