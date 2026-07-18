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

export default function Admin() {
  const { project, isLoading, updateAnswers } = useProject();

  const [adminRights, setAdminRights] = useState("");
  const [separateAccounts, setSeparateAccounts] = useState("");
  const [adminUsage, setAdminUsage] = useState("");
  const [reviewProcess, setReviewProcess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!project) return;

    setAdminRights(project.answers?.adminPrivileges?.adminRights ?? "");
    setSeparateAccounts(
      project.answers?.adminPrivileges?.separateAccounts ?? "",
    );
    setAdminUsage(project.answers?.adminPrivileges?.adminUsage ?? "");
    setReviewProcess(project.answers?.adminPrivileges?.reviewProcess ?? "");
  }, [project]);

  async function handleNext() {
    await updateAnswers({
      adminPrivileges: {
        adminRights,
        separateAccounts,
        adminUsage,
        reviewProcess,
      },
    });

    navigate("/wizard/backups");
  }

  async function handleBack() {
    await updateAnswers({
      adminPrivileges: {
        adminRights,
        separateAccounts,
        adminUsage,
        reviewProcess,
      },
    });

    navigate("/wizard/application-hardening");
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
          Restrict Administrative Privileges
        </Typography>

        <Typography variant="p" fontWeight="bold" gutterBottom>
          This is one of the highest‑impact Essential Eight controls.
        </Typography>
      </Box>

      {/* Question 1 */}
      <FormControl>
        <FormLabel>
          Do standard users have administrator rights on their computers?
        </FormLabel>
        <RadioGroup
          value={adminRights}
          onChange={(e) => setAdminRights(e.target.value)}
        >
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel
            value="some"
            control={<Radio />}
            label="Some users do"
          />
          <FormControlLabel
            value="most"
            control={<Radio />}
            label="Most users do"
          />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 2 */}
      <FormControl>
        <FormLabel>
          Are administrator accounts separate from normal user accounts?
        </FormLabel>
        <RadioGroup
          value={separateAccounts}
          onChange={(e) => setSeparateAccounts(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 3 */}
      <FormControl>
        <FormLabel>
          Are administrator accounts only used for administrative tasks?
        </FormLabel>
        <RadioGroup
          value={adminUsage}
          onChange={(e) => setAdminUsage(e.target.value)}
        >
          <FormControlLabel value="always" control={<Radio />} label="Always" />
          <FormControlLabel
            value="sometimes"
            control={<Radio />}
            label="Sometimes"
          />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>

      {/* Question 4 */}
      <FormControl>
        <FormLabel>
          Are administrator accounts regularly reviewed and removed when no
          longer needed?
        </FormLabel>
        <RadioGroup
          value={reviewProcess}
          onChange={(e) => setReviewProcess(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel
            value="occasionally"
            control={<Radio />}
            label="Occasionally"
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
