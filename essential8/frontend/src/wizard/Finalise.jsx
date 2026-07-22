import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProject } from "../projects/useProject";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../LoadingScreen";
import { useWizardNavigation } from "./useWizardNavigation";

export default function Finalise() {
  const { project, isLoading, updateProject } = useProject();
  const navigate = useNavigate();
  const { goTo } = useWizardNavigation();

  async function handleNext() {
    await updateProject({
      status: "In Progress",
    });

    navigate("/projects");
  }

  async function handleBack() {
    goTo("backups");
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Finalise your project
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          You will still have access to the project. From here we transform your
          answers into a roadmap to improve your Essential Eight maturity.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          pt: 2,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Button
          onClick={handleBack}
          variant="text"
          color="inherit"
          size="large"
        >
          Back
        </Button>

        <Button
          onClick={handleNext}
          variant="contained"
          size="large"
          disableElevation
        >
          Finalise
        </Button>
      </Box>
    </Box>
  );
}
