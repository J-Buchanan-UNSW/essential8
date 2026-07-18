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

export default function Backups() {
  const { project, isLoading, updateAnswers } = useProject();

  const [frequency, setFrequency] = useState("");
  const [separateStorage, setSeparateStorage] = useState("");
  const [testing, setTesting] = useState("");
  const [restoration, setRestoration] = useState("");
  const [ransomwareProtection, setRansomwareProtection] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!project) return;

    setFrequency(project.answers?.backups?.frequency ?? "");
    setSeparateStorage(project.answers?.backups?.separateStorage ?? "");
    setTesting(project.answers?.backups?.testing ?? "");
    setRestoration(project.answers?.backups?.restoration ?? "");
    setRansomwareProtection(
      project.answers?.backups?.ransomwareProtection ?? "",
    );
  }, [project]);

  async function handleNext() {
    await updateAnswers({
      backups: {
        frequency,
        separateStorage,
        testing,
        restoration,
        ransomwareProtection,
      },
    });

    navigate("/wizard/finalise");
  }

  async function handleBack() {
    await updateAnswers({
      backups: {
        frequency,
        separateStorage,
        testing,
        restoration,
        ransomwareProtection,
      },
    });

    navigate("/wizard/admin");
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
          Regular Backups
        </Typography>

        <Typography variant="p" fontWeight="bold" gutterBottom>
          The ASD places a strong emphasis on recoverability, not just having
          backups.
        </Typography>
      </Box>

      {/* Question 1 */}
      <FormControl>
        <FormLabel>
          How often are important business data and systems backed up?
        </FormLabel>
        <RadioGroup
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <FormControlLabel
            value="multiDaily"
            control={<Radio />}
            label="Multiple times per day"
          />
          <FormControlLabel value="daily" control={<Radio />} label="Daily" />
          <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
          <FormControlLabel
            value="less"
            control={<Radio />}
            label="Less often"
          />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 2 */}
      <FormControl>
        <FormLabel>
          Are backups stored separately from your main systems (offline,
          immutable or in a separate environment)?
        </FormLabel>
        <RadioGroup
          value={separateStorage}
          onChange={(e) => setSeparateStorage(e.target.value)}
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
        <FormLabel>Are backup restorations tested regularly?</FormLabel>
        <RadioGroup
          value={testing}
          onChange={(e) => setTesting(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel
            value="occasionally"
            control={<Radio />}
            label="Occasionally"
          />
          <FormControlLabel value="never" control={<Radio />} label="Never" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 4 */}
      <FormControl>
        <FormLabel>
          Can critical business systems be restored after a cyber incident?
        </FormLabel>
        <RadioGroup
          value={restoration}
          onChange={(e) => setRestoration(e.target.value)}
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

      {/* Question 5 */}
      <FormControl>
        <FormLabel>
          Are backups protected from ransomware (for example immutable storage
          or offline copies)?
        </FormLabel>
        <RadioGroup
          value={ransomwareProtection}
          onChange={(e) => setRansomwareProtection(e.target.value)}
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
