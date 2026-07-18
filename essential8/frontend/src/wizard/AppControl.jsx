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

export default function AppControl() {
  const { project, isLoading, updateAnswers } = useProject();

  const [install, setInstall] = useState("");
  const [approvedApp, setApprovedApp] = useState("");
  const [blocked, setBlocked] = useState("");
  const [control, setControl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!project) return;

    setInstall(project.answers?.appControl?.install ?? "");
    setApprovedApp(project.answers?.appControl?.approvedApp ?? "");
    setBlocked(project.answers?.appControl?.blocked ?? "");
    setControl(project.answers?.appControl?.control ?? "");
  }, [project]);

  async function handleNext() {
    await updateAnswers({
      appControl: { install, approvedApp, blocked, control },
    });
    navigate("/wizard/patch");
  }

  async function handleBack() {
    await updateAnswers({
      appControl: { install, approvedApp, blocked, control },
    });
    navigate("/wizard/mfa");
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
          Tell us about your App Control Policies
        </Typography>

        <Typography variant="p" fontWeight="bold" gutterBottom>
          App control relates to how your employees can download and use
          applications. It also encapsulates how permissions on these
          applications are managed.
        </Typography>
      </Box>

      <FormControl>
        <FormLabel>
          Can users install any software they choose on their work devices?
        </FormLabel>
        <RadioGroup
          value={install}
          onChange={(e) => setInstall(e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="Yes" />
          <FormControlLabel
            value="some"
            control={<Radio />}
            label="Only approved users can install software"
          />
          <FormControlLabel
            value="none"
            control={<Radio />}
            label="No, only approved applications can be installed"
          />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>
          Does your organisation maintain a list of approved applications?
        </FormLabel>
        <RadioGroup
          value={approvedApp}
          onChange={(e) => setApprovedApp(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>
          Are unapproved applications automatically blocked from running?
        </FormLabel>
        <RadioGroup
          value={blocked}
          onChange={(e) => setBlocked(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>How is application control enforced?</FormLabel>
        <RadioGroup
          value={control}
          onChange={(e) => setControl(e.target.value)}
        >
          <FormControlLabel
            value="none"
            control={<Radio />}
            label="No application control"
          />
          <FormControlLabel
            value="manual"
            control={<Radio />}
            label="Manual policies only"
          />
          <FormControlLabel
            value="managed"
            control={<Radio />}
            label="Managed through endpoint security or IT management tools"
          />
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
