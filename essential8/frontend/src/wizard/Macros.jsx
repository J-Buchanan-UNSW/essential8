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

export default function Macros() {
  const { project, isLoading, updateAnswers } = useProject();

  const [macroRun, setMacroRun] = useState("");
  const [blockInternet, setBlockInternet] = useState("");
  const [preventChanges, setPreventChanges] = useState("");
  const [signedMacros, setSignedMacros] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!project) return;

    setMacroRun(project.answers?.macroSettings?.macroRun ?? "");
    setBlockInternet(project.answers?.macroSettings?.blockInternet ?? "");
    setPreventChanges(project.answers?.macroSettings?.preventChanges ?? "");
    setSignedMacros(project.answers?.macroSettings?.signedMacros ?? "");
  }, [project]);

  async function handleNext() {
    await updateAnswers({
      macroSettings: {
        macroRun,
        blockInternet,
        preventChanges,
        signedMacros,
      },
    });

    navigate("/wizard/application-hardening");
  }

  async function handleBack() {
    await updateAnswers({
      macroSettings: {
        macroRun,
        blockInternet,
        preventChanges,
        signedMacros,
      },
    });

    navigate("/wizard/os");
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
          Microsoft Office Macro Settings
        </Typography>

        <Typography variant="p" fontWeight="bold" gutterBottom>
          This mitigation is about preventing malicious Office macros from
          running.
        </Typography>
      </Box>

      {/* Question 1 */}
      <FormControl>
        <FormLabel>Can Microsoft Office macros run on user devices?</FormLabel>
        <RadioGroup
          value={macroRun}
          onChange={(e) => setMacroRun(e.target.value)}
        >
          <FormControlLabel
            value="disabled"
            control={<Radio />}
            label="Macros are disabled by default"
          />
          <FormControlLabel
            value="trusted"
            control={<Radio />}
            label="Only approved or trusted macros can run"
          />
          <FormControlLabel
            value="userEnabled"
            control={<Radio />}
            label="Users can enable macros themselves"
          />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 2 */}
      <FormControl>
        <FormLabel>
          Does your organisation block macros downloaded from the internet?
        </FormLabel>
        <RadioGroup
          value={blockInternet}
          onChange={(e) => setBlockInternet(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 3 */}
      <FormControl>
        <FormLabel>
          Are users prevented from changing macro security settings?
        </FormLabel>
        <RadioGroup
          value={preventChanges}
          onChange={(e) => setPreventChanges(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 4 */}
      <FormControl>
        <FormLabel>
          Are digitally signed macros used where macros are required?
        </FormLabel>
        <RadioGroup
          value={signedMacros}
          onChange={(e) => setSignedMacros(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel
            value="none"
            control={<Radio />}
            label="We don't use macros"
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
