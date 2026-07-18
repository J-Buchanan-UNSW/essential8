import { Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useProject } from "../projects/useProject";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../LoadingScreen";

export default function Business() {
  const { project, isLoading, updateAnswers } = useProject();

  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [employees, setEmployees] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!project) return;

    setBusinessName(project.answers?.organisation?.businessName ?? "");
    setIndustry(project.answers?.organisation?.industry ?? "");
    setEmployees(project.answers?.organisation?.employees ?? "");
  }, [project]);

  async function handleNext() {
    await updateAnswers({
      organisation: {
        businessName,
        industry,
        employees,
      },
    });

    navigate("/wizard/mfa");
  }

  async function handleBack() {
    await updateAnswers({
      organisation: {
        businessName,
        industry,
        employees,
      },
    });

    navigate("/wizard/setup");
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
          Tell us about your organisation
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          label="Organisation name"
          placeholder="e.g. Acme Pty Ltd"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          fullWidth
        />

        <TextField
          label="Industry"
          placeholder="e.g. Healthcare, Education, Retail"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          fullWidth
        />

        <TextField
          label="Number of employees"
          type="number"
          helperText="Approximate is fine."
          value={employees}
          onChange={(e) => setEmployees(e.target.value)}
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
