import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppsIcon from "@mui/icons-material/Apps";
import SecurityIcon from "@mui/icons-material/Security";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorIcon from "@mui/icons-material/Error";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlined";
import BlockIcon from "@mui/icons-material/Block";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MonitorIcon from "@mui/icons-material/Monitor";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const implementationSteps = [
  "Inventory existing software",
  "Create an approved application list",
  "Choose an Application Control solution",
  "Deploy in Audit Mode",
  "Enable Enforcement",
  "Maintain the allowlist",
  "Monitor blocked applications",
];

export default function ApprovedApp() {
  return (
    <Box sx={{ mt: 4 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Application Control
          </Typography>

          <Typography color="text.secondary" paragraph>
            Prevent malware and unauthorised software from running by allowing
            only approved applications to be installed.
          </Typography>

          <Alert severity="info" sx={{ mb: 4 }}>
            Application Control is one of the most effective security controls
            because it stops malicious software before it can run or be
            installed.
          </Alert>

          <Typography variant="h5" gutterBottom>
            What is Application Control?
          </Typography>

          <Typography paragraph>
            By default, most computers will run almost any program a user
            downloads. Application Control changes this behaviour by allowing
            only approved software to be installed and run on the computer.
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              p: 3,
              my: 3,
              bgcolor: "grey.50",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Think of it like a guestlist for a party
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              sx={{ my: 2 }}
            >
              <Box>
                <AppsIcon fontSize="large" color="primary" />
                <Typography>User Installs</Typography>
              </Box>

              <ArrowForwardIcon />
              <Box>
                <BlockIcon color="error" fontSize="large" />
                <Typography>Install is compared to approved list</Typography>
              </Box>

              <ArrowForwardIcon />
              <Box>
                <CheckCircleIcon color="success" fontSize="large" />
                <Typography>User runs App</Typography>
              </Box>
            </Stack>

            <Typography>
              Software is checked before it is installed against a list. If it
              isn't on the approved list, it is blocked automatically. If it is
              it is free to run on the users computer.
            </Typography>
          </Paper>

          <Divider sx={{ my: 4 }} />
          <Typography variant="h5" gutterBottom>
            Why is this important?
          </Typography>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 2 }}>
                <Typography fontWeight="bold">
                  Without Application Control
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemText primary="Users can run downloaded software" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Malware can execute" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Ransomware can encrypt files" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 2 }}>
                <Typography fontWeight="bold">
                  With Application Control
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemText primary="Only approved software runs" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Unknown programs are blocked" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Malware is stopped before execution" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>

          <Alert severity="success">
            Even if malware is downloaded through a phishing email, it cannot
            execute unless it has already been approved.
          </Alert>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom>
            Which option should I choose?
          </Typography>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <CheckCircleIcon color="success" sx={{ mr: 2 }} />
              <Typography fontWeight="bold">Yes, for all devices</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Chip label="Recommended" color="success" sx={{ mb: 2 }} />

              <Typography paragraph>
                Every workstation and server only allows approved software to
                execute.
              </Typography>

              <Typography variant="subtitle2">Examples</Typography>

              <List dense>
                <ListItem>
                  <ListItemText primary="Microsoft Defender Application Control (WDAC)" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="Microsoft AppLocker" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="Enterprise application allowlisting" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <WarningAmberIcon color="warning" sx={{ mr: 2 }} />
              <Typography fontWeight="bold">Yes, for some devices</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Chip label="Needs Improvement" color="warning" sx={{ mb: 2 }} />

              <Typography>
                Application Control is enabled on some systems, such as servers
                or privileged workstations, but not across the entire
                organisation.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <ErrorIcon color="error" sx={{ mr: 2 }} />
              <Typography fontWeight="bold">No</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Chip label="High Risk" color="error" sx={{ mb: 2 }} />

              <Typography>
                Users are free to install or run downloaded applications without
                approval.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <HelpOutlineIcon sx={{ mr: 2 }} />
              <Typography fontWeight="bold">Unsure</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Choose this if you do not know whether your organisation uses
                application allowlisting.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom>
            Implementation Roadmap
          </Typography>

          <Stepper orientation="vertical" activeStep={-1}>
            {implementationSteps.map((step) => (
              <Step key={step} completed>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Accordion sx={{ mt: 3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Inventory2Icon sx={{ mr: 2 }} />
              <Typography>1. Inventory existing software</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Create a list of every application currently used by your
                organisation, including business software, browsers, utilities,
                developer tools and custom applications.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <PlaylistAddCheckIcon sx={{ mr: 2 }} />
              <Typography>2. Create an approved application list</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Review which applications are genuinely required and create an
                allowlist of trusted software.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AdminPanelSettingsIcon sx={{ mr: 2 }} />
              <Typography>3. Deploy in Audit Mode</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Start by monitoring which applications would be blocked before
                enforcing Application Control. This reduces disruption.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SecurityIcon sx={{ mr: 2 }} />
              <Typography>4. Enable Enforcement</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once testing is complete, switch from audit mode to enforcement
                so unapproved software is blocked automatically.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <MonitorIcon sx={{ mr: 2 }} />
              <Typography>5. Monitor and Maintain</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Review blocked applications, approve legitimate software when
                necessary and remove applications that are no longer required.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 4 }} />

          <Alert severity="warning" sx={{ mb: 3 }}>
            <Typography fontWeight="bold">Common mistakes</Typography>

            <ul>
              <li>Allowing users to install any software they like</li>
              <li>Never switching from Audit Mode to Enforcement</li>
              <li>Failing to update the approved application list</li>
              <li>Ignoring blocked application logs</li>
              <li>Allowing unsigned or unknown applications</li>
            </ul>
          </Alert>

          <Alert severity="success">
            <Typography fontWeight="bold">What good looks like</Typography>

            <ul>
              <li>Only approved software is allowed to execute</li>
              <li>Application Control is enabled across all devices</li>
              <li>New software is tested before approval</li>
              <li>Blocked applications are monitored and investigated</li>
              <li>The allowlist is regularly reviewed and maintained</li>
            </ul>
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
