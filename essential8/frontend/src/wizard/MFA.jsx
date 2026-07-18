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
import { Link, useNavigate } from "react-router-dom";
import { useProject } from "../projects/useProject";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../LoadingScreen";

export default function MFA() {
  const { project, isLoading, updateAnswers } = useProject();

  const [adminMfa, setAdminMfa] = useState("");
  const [usersMfa, setUsersMfa] = useState("");
  const [exemptMfa, setExemptMfa] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!project) return;

    setAdminMfa(project.answers?.mfa?.adminMfa ?? "");
    setUsersMfa(project.answers?.mfa?.usersMfa ?? "");
    setExemptMfa(project.answers?.mfa?.exemptMfa ?? "");
  }, [project]);

  async function handleNext() {
    await updateAnswers({
      mfa: {
        adminMfa,
        usersMfa,
        exemptMfa,
      },
    });

    navigate("/wizard/app-control");
  }

  async function handleBack() {
    await updateAnswers({
      mfa: {
        adminMfa,
        usersMfa,
        exemptMfa,
      },
    });

    navigate("/wizard/business");
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
          Tell us about your multi factor authentiation (MFA) policies
        </Typography>
        <Typography variant="p" fontWeight="bold" gutterBottom>
          MFA is the process of using multiple different methods for accessing a
          resource. This could be a password with an SMS code. Or a pin, with an
          authenticator code, and your faceID. Or any combiantion of
          authentication techniques.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <FormControl>
          <FormLabel>
            Is MFA required for privileged (administrator) accounts?
          </FormLabel>

          <RadioGroup
            value={adminMfa}
            onChange={(e) => setAdminMfa(e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="Yes, for all administrator accounts"
            />

            <FormControlLabel
              value="some"
              control={<Radio />}
              label="Yes, for some administrator accounts"
            />

            <FormControlLabel value="none" control={<Radio />} label="No" />

            <FormControlLabel
              value="unsure"
              control={<Radio />}
              label="Unsure"
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Is MFA required for all standard user accounts?</FormLabel>

          <RadioGroup
            value={usersMfa}
            onChange={(e) => setUsersMfa(e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="Yes, for all users"
            />

            <FormControlLabel
              value="some"
              control={<Radio />}
              label="Yes, for some users"
            />

            <FormControlLabel value="none" control={<Radio />} label="No" />

            <FormControlLabel
              value="unsure"
              control={<Radio />}
              label="Unsure"
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Are there any approved exemptions from MFA?</FormLabel>

          <RadioGroup
            value={exemptMfa}
            onChange={(e) => setExemptMfa(e.target.value)}
          >
            <FormControlLabel
              value="none"
              control={<Radio />}
              label="No exemptions"
            />

            <FormControlLabel
              value="few"
              control={<Radio />}
              label="A small number of approved exemptions"
            />

            <FormControlLabel
              value="many"
              control={<Radio />}
              label="Many exemptions"
            />

            <FormControlLabel
              value="unsure"
              control={<Radio />}
              label="Unsure"
            />
          </RadioGroup>
        </FormControl>
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
