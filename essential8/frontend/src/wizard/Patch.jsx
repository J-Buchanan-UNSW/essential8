import {
  Box,
  Typography,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProject } from "../projects/useProject";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../LoadingScreen";

export default function Patch() {
  const { project, isLoading, updateAnswers } = useProject();

  const [speed, setSpeed] = useState("");
  const [autoUpdates, setAutoUpdates] = useState("");
  const [checkProcess, setCheckProcess] = useState("");
  const [unsupported, setUnsupported] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!project) return;

    setSpeed(project.answers?.patchApplications?.speed ?? "");
    setAutoUpdates(project.answers?.patchApplications?.autoUpdates ?? "");
    setCheckProcess(project.answers?.patchApplications?.checkProcess ?? "");
    setUnsupported(project.answers?.patchApplications?.unsupported ?? "");
  }, [project]);

  async function handleNext() {
    await updateAnswers({
      patchApplications: {
        speed,
        autoUpdates,
        checkProcess,
        unsupported,
      },
    });

    navigate("/wizard/os");
  }

  async function handleBack() {
    await updateAnswers({
      patchApplications: {
        speed,
        autoUpdates,
        checkProcess,
        unsupported,
      },
    });

    navigate("/wizard/app-control");
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
          Patch Applications
        </Typography>

        <Typography variant="p" fontWeight="bold" gutterBottom>
          This mitigation is about keeping applications like web browsers,
          Microsoft Office, Adobe Reader, Java, Zoom, and others up to date.
        </Typography>
      </Box>

      {/* Question 1 */}
      <FormControl>
        <FormLabel>
          How quickly are security updates applied to internet-facing
          applications?
        </FormLabel>
        <RadioGroup value={speed} onChange={(e) => setSpeed(e.target.value)}>
          <FormControlLabel
            value="48h"
            control={<Radio />}
            label="Within 48 hours"
          />
          <FormControlLabel
            value="1m"
            control={<Radio />}
            label="Within one month"
          />
          <FormControlLabel
            value="longer"
            control={<Radio />}
            label="Longer than one month"
          />
          <FormControlLabel
            value="convenient"
            control={<Radio />}
            label="Updates are applied only when convenient"
          />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 2 */}
      <FormControl>
        <FormLabel>
          Are application updates installed automatically where possible?
        </FormLabel>
        <RadioGroup
          value={autoUpdates}
          onChange={(e) => setAutoUpdates(e.target.value)}
        >
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Yes, for all supported applications"
          />
          <FormControlLabel
            value="some"
            control={<Radio />}
            label="Yes, for some applications"
          />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 3 */}
      <FormControl>
        <FormLabel>
          Does your organisation have a process to regularly check for missing
          application updates?
        </FormLabel>
        <RadioGroup
          value={checkProcess}
          onChange={(e) => setCheckProcess(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 4 */}
      <FormControl>
        <FormLabel>
          Are unsupported or end-of-life applications still used?
        </FormLabel>
        <RadioGroup
          value={unsupported}
          onChange={(e) => setUnsupported(e.target.value)}
        >
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Navigation */}
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
          variant="contained"
          size="large"
          disableElevation
          onClick={handleNext}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
