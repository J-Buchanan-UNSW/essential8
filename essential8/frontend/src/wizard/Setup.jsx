import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useProject } from "../projects/useProject";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../LoadingScreen";
import { useWizardNavigation } from "./useWizardNavigation";

export default function Setup() {
  const { project, isLoading, updateProject } = useProject();

  const [projectName, setProjectName] = useState("");
  const { goTo } = useWizardNavigation();

  useEffect(() => {
    if (!project) return;

    setProjectName(project.name ?? "");
  }, [project]);

  async function handleNext() {
    await updateProject({
      name: projectName,
    });

    goTo("business");
  }

  async function handleBack() {
    await updateProject({
      name: projectName,
    });

    goTo("");
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
          Name your project
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          label="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          fullWidth
        />
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
          Continue
        </Button>
      </Box>
    </Box>
  );
}
