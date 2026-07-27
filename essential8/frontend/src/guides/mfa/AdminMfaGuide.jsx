import {
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import PasswordIcon from "@mui/icons-material/Password";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorIcon from "@mui/icons-material/Error";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlined";
import KeyIcon from "@mui/icons-material/Key";
import ShieldIcon from "@mui/icons-material/Shield";
import VisibilityIcon from "@mui/icons-material/Visibility";

const implementationSteps = [
  "Identify privileged accounts",
  "Choose an MFA method",
  "Enable MFA everywhere",
  "Protect emergency accounts",
  "Monitor administrator logins",
];

export default function AdminMfaGuide() {
  return (
    <Box sx={{ mt: 4 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Administrator Multi-Factor Authentication
          </Typography>

          <Typography color="text.secondary" paragraph>
            Protect your organisation's most powerful accounts by requiring a
            second form of authentication whenever administrators sign in.
          </Typography>

          <Alert severity="info" sx={{ mb: 3 }}>
            Administrator accounts have the ability to change security settings,
            install software, access sensitive data and control critical
            systems. If one of these accounts is compromised, an attacker can
            often take control of the entire organisation.
          </Alert>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom>
            What is Multi-Factor Authentication?
          </Typography>

          <Typography paragraph>
            Multi-Factor Authentication (MFA) requires users to prove their
            identity using more than just a password. Even if a password is
            stolen, attackers still need a second factor before they can log in.
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <PasswordIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Something you know"
                secondary="A password or PIN"
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <KeyIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Something you have"
                secondary="Authenticator app, hardware key or phone approval"
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <SecurityIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Something you are"
                secondary="Fingerprint or facial recognition"
              />
            </ListItem>
          </List>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom>
            Why is this important?
          </Typography>

          <Typography paragraph>
            Most cyber attacks begin with stolen passwords. Passwords can be
            stolen through phishing emails, malware, password reuse or data
            breaches. MFA prevents a stolen password from being enough to access
            privileged systems.
          </Typography>

          <Alert severity="success">
            Enabling MFA for administrator accounts is one of the highest-impact
            security improvements an organisation can make.
          </Alert>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom>
            Which option should I choose?
          </Typography>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <CheckCircleIcon color="success" sx={{ mr: 2 }} />
              <Typography fontWeight="bold">
                Yes, for all administrator accounts
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Chip label="Recommended" color="success" sx={{ mb: 2 }} />

              <Typography paragraph>
                Every privileged account requires MFA before signing in.
              </Typography>

              <Typography variant="subtitle2">Examples include:</Typography>

              <List dense>
                <ListItem>
                  <ListItemText primary="Windows Domain Administrators" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Microsoft 365 Global Administrators" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="AWS Root & IAM Administrators" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Azure Administrators" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Firewall & Network Administrators" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <WarningAmberIcon color="warning" sx={{ mr: 2 }} />
              <Typography fontWeight="bold">
                Yes, for some administrator accounts
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Chip label="Needs Improvement" color="warning" sx={{ mb: 2 }} />

              <Typography>
                MFA is enabled for some privileged accounts but others remain
                protected only by a password.
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
                Administrator accounts rely only on usernames and passwords.
                This leaves critical systems vulnerable if credentials are
                stolen.
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
                Select this if you don't know whether administrator accounts
                require MFA or different systems have different requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom>
            How to implement MFA
          </Typography>

          <Stepper orientation="vertical" activeStep={-1}>
            {implementationSteps.map((step) => (
              <Step key={step} completed>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ mt: 3 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AdminPanelSettingsIcon sx={{ mr: 2 }} />
                <Typography>1. Identify privileged accounts</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography paragraph>
                  Create an inventory of every account with administrative
                  privileges, including cloud administrators, local
                  administrators, database administrators, firewall
                  administrators and emergency accounts.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ShieldIcon sx={{ mr: 2 }} />
                <Typography>2. Choose a strong MFA method</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography paragraph>
                  Prefer hardware security keys or authenticator apps. SMS
                  verification should only be used where stronger methods are
                  unavailable.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <SecurityIcon sx={{ mr: 2 }} />
                <Typography>3. Enable MFA on every platform</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  Enable MFA for Microsoft 365, Azure, AWS, VPNs, firewalls,
                  servers, backup systems and any platform that provides
                  administrative access.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <KeyIcon sx={{ mr: 2 }} />
                <Typography>4. Secure emergency accounts</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  Protect break-glass accounts with strong passwords, MFA where
                  possible, secure storage and regular testing.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <VisibilityIcon sx={{ mr: 2 }} />
                <Typography>5. Monitor administrator logins</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  Review login activity for failed sign-ins, unusual locations,
                  new devices and suspicious behaviour. Configure alerts for
                  privileged account activity wherever possible.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Alert severity="warning" sx={{ mb: 3 }}>
            <Typography fontWeight="bold">Common mistakes</Typography>

            <ul>
              <li>Administrator accounts without MFA</li>
              <li>Shared administrator accounts</li>
              <li>Former employee administrator accounts left active</li>
              <li>Relying solely on SMS authentication</li>
              <li>Forgetting cloud or local administrator accounts</li>
              <li>Never reviewing privileged account access</li>
            </ul>
          </Alert>

          <Alert severity="success">
            <Typography fontWeight="bold">What good looks like</Typography>

            <ul>
              <li>Every administrator account uses MFA</li>
              <li>Authenticator apps or hardware keys are preferred</li>
              <li>Only necessary staff have administrator access</li>
              <li>Administrator logins are monitored and reviewed</li>
              <li>Emergency accounts are securely managed</li>
            </ul>
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
