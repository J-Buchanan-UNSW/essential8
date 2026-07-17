import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./auth/amplify";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider.jsx";
import { ProjectProvider } from "./projects/ProjectProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProjectProvider>
    </AuthProvider>
  </StrictMode>,
);
