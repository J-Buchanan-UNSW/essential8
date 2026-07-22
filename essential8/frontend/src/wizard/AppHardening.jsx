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
import { useProject } from "../projects/useProject";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../LoadingScreen";
import { useWizardNavigation } from "./useWizardNavigation";

export default function AppHardening() {
  const { project, isLoading, updateAnswers } = useProject();

  const [browserFeatures, setBrowserFeatures] = useState("");
  const [browserSecurity, setBrowserSecurity] = useState("");
  const [extensions, setExtensions] = useState("");
  const [pdfSecurity, setPdfSecurity] = useState("");
  const { goTo } = useWizardNavigation();

  useEffect(() => {
    if (!project) return;

    setBrowserFeatures(project.answers?.userHardening?.browserFeatures ?? "");
    setBrowserSecurity(project.answers?.userHardening?.browserSecurity ?? "");
    setExtensions(project.answers?.userHardening?.extensions ?? "");
    setPdfSecurity(project.answers?.userHardening?.pdfSecurity ?? "");
  }, [project]);

  async function handleNext() {
    await updateAnswers({
      userHardening: {
        browserFeatures,
        browserSecurity,
        extensions,
        pdfSecurity,
      },
    });

    goTo("admin");
  }

  async function handleBack() {
    await updateAnswers({
      userHardening: {
        browserFeatures,
        browserSecurity,
        extensions,
        pdfSecurity,
      },
    });

    goTo("macros");
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
          User Application Hardening
        </Typography>

        <Typography variant="p" fontWeight="bold" gutterBottom>
          This mitigation reduces attack surface in browsers and PDF/document
          viewers.
        </Typography>
      </Box>

      {/* Question 1 */}
      <FormControl>
        <FormLabel>
          Are unnecessary browser features disabled (for example Java, Flash or
          other legacy plugins)?
        </FormLabel>
        <RadioGroup
          value={browserFeatures}
          onChange={(e) => setBrowserFeatures(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 2 */}
      <FormControl>
        <FormLabel>
          Are web browsers configured with security protections (such as
          blocking dangerous downloads and websites)?
        </FormLabel>
        <RadioGroup
          value={browserSecurity}
          onChange={(e) => setBrowserSecurity(e.target.value)}
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
          Can users install browser extensions without approval?
        </FormLabel>
        <RadioGroup
          value={extensions}
          onChange={(e) => setExtensions(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel
            value="approved"
            control={<Radio />}
            label="Only approved extensions"
          />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 4 */}
      <FormControl>
        <FormLabel>
          Are PDF readers and document viewers kept securely configured and
          regularly updated?
        </FormLabel>
        <RadioGroup
          value={pdfSecurity}
          onChange={(e) => setPdfSecurity(e.target.value)}
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
