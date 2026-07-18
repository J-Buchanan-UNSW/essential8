import { Routes, Route, Link, NavLink } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import LandingScreen from "./LandingScreen.jsx";
import Wizard from "./Wizard.jsx";
import Step1 from "./wizard/Business.jsx";
import Step0 from "./wizard/Step0Intro.jsx";
import Business from "./wizard/Business.jsx";
import Login from "./auth/Login.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import { signOut } from "aws-amplify/auth";
import { useAuth } from "./auth/useAuth";
import Projects from "./Projects.jsx";
import MFA from "./wizard/MFA.jsx";
import Setup from "./wizard/Setup.jsx";
import AppControl from "./wizard/AppControl.jsx";
import Patch from "./wizard/Patch.jsx";
import Os from "./wizard/Os.jsx";
import Macros from "./wizard/Macros.jsx";
import AppHardening from "./wizard/AppHardening.jsx";
import Admin from "./wizard/Admin.jsx";
import Backups from "./wizard/Backups.jsx";
import Finalise from "./wizard/Finalise.jsx";
import Project from "./Project.jsx";

function App() {
  const { authenticated } = useAuth();

  async function logout() {
    await signOut({
      global: true,
    });
  }

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              Essential 8
            </Typography>
            {authenticated ? (
              <>
                <Button color="inherit" component={Link} to="/projects">
                  Projects
                </Button>
                <Button color="inherit" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/wizard"
          element={
            <ProtectedRoute>
              <Wizard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Step0 />} />
          <Route path="setup" element={<Setup />} />
          <Route path="business" element={<Business />} />
          <Route path="mfa" element={<MFA />} />
          <Route path="app-control" element={<AppControl />} />
          <Route path="patch" element={<Patch />} />
          <Route path="os" element={<Os />} />
          <Route path="macros" element={<Macros />} />
          <Route path="application-hardening" element={<AppHardening />} />
          <Route path="admin" element={<Admin />} />
          <Route path="backups" element={<Backups />} />
          <Route path="finalise" element={<Finalise />} />
        </Route>
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project"
          element={
            <ProtectedRoute>
              <Project />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
