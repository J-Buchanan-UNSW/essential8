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

export default function Os() {
  const { project, isLoading, updateAnswers } = useProject();

  const [speed, setSpeed] = useState("");
  const [autoUpdates, setAutoUpdates] = useState("");
  const [unsupported, setUnsupported] = useState("");
  const [monitoring, setMonitoring] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!project) return;

    setSpeed(project.answers?.patchOS?.speed ?? "");
    setAutoUpdates(project.answers?.patchOS?.autoUpdates ?? "");
    setUnsupported(project.answers?.patchOS?.unsupported ?? "");
    setMonitoring(project.answers?.patchOS?.monitoring ?? "");
  }, [project]);

  async function handleNext() {
    await updateAnswers({
      patchOS: {
        speed,
        autoUpdates,
        unsupported,
        monitoring,
      },
    });

    navigate("/wizard/macros");
  }

  async function handleBack() {
    await updateAnswers({
      patchOS: {
        speed,
        autoUpdates,
        unsupported,
        monitoring,
      },
    });

    navigate("/wizard/patch");
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
          Patch Operating Systems
        </Typography>

        <Typography variant="p" fontWeight="bold" gutterBottom>
          This mitigation focuses on keeping Windows, macOS, Linux, and mobile
          operating systems up to date with the latest security patches.
        </Typography>
      </Box>

      {/* Question 1 */}
      <FormControl>
        <FormLabel>
          How quickly are operating system security updates installed?
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
            label="Only when convenient"
          />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 2 */}
      <FormControl>
        <FormLabel>
          Are operating system updates installed automatically where possible?
        </FormLabel>
        <RadioGroup
          value={autoUpdates}
          onChange={(e) => setAutoUpdates(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel
            value="partial"
            control={<Radio />}
            label="Partially"
          />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 3 */}
      <FormControl>
        <FormLabel>
          Are any devices running unsupported operating systems?
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

      {/* Question 4 */}
      <FormControl>
        <FormLabel>
          Does your organisation regularly monitor devices for missing operating
          system updates?
        </FormLabel>
        <RadioGroup
          value={monitoring}
          onChange={(e) => setMonitoring(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
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
