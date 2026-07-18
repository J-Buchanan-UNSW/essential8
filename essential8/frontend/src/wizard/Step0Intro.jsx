import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Step0() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        py: 6,
        px: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Welcome!
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: 600,
          mb: 5,
          lineHeight: 1.8,
        }}
      >
        This setup wizard will ask a small number of questions about your
        organisation, its technology and current cyber security practices. Your
        responses will be used to recommend an appropriate implementation
        roadmap aligned with the Australian Cyber Security Centre's Essential
        Eight maturity model.
      </Typography>

      <Button
        component={Link}
        to="/wizard/setup"
        variant="contained"
        size="large"
        sx={{
          px: 6,
          py: 1.5,
          borderRadius: 3,
          fontWeight: "bold",
        }}
      >
        Start Assessment
      </Button>
    </Box>
  );
}
