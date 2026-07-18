import { Box, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useProject } from "./projects/useProject";
import { LoadingScreen } from "./LoadingScreen";

export default function Wizard() {
  const { project, isLoading, updateAnswers } = useProject();

  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!project) {
    navigate("/projects");
  }

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f7fa",
        p: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 900,
          borderRadius: 4,
          p: 5,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Initial Setup
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Complete a few quick questions so we can generate a personalised
          Essential Eight implementation roadmap for your organisation.
        </Typography>

        <Outlet />
      </Paper>
    </Box>
  );
}
