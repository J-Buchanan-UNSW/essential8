import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LandingScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "calc(100vh - 64px)",
        px: 8,
        gap: 8,
      }}
    >
      {/* Left Side */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Essential Eight Roadmap
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600 }}
        >
          Welcome to the Essential Eight Roadmap. This tool is designed to guide
          organisations through the Australian Cyber Security Centre's Essential
          Eight maturity model. Complete a short assessment to generate a
          personalised implementation roadmap, helping you prioritise security
          improvements and track your progress over time.
        </Typography>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          component={Link}
          to="/wizard"
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 2,
            fontSize: "1.1rem",
          }}
        >
          Start New Project
        </Button>
      </Box>
    </Box>
  );
}
