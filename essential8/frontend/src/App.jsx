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

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Essential 8
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wizard" element={<Wizard />}>
          <Route index element={<Step0 />} />
          <Route path="business" element={<Business />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
