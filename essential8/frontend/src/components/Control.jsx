import { useEffect, useState } from "react";
import { useProject } from "../projects/useProject";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingScreen } from "../LoadingScreen";
import OverallMaturityCard from "./OverallMaturityCard";
import {
  Box,
  Button,
  Container,
  Typography,
  Checkbox,
  Paper
} from "@mui/material";
import NotFound from "../NotFound";

export default function Control() {
  const { project, getReport } = useProject();
  const [report, setReport] = useState(null);
  const { controlId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadReport();
  }, [project]);

  async function loadReport() {
    const report = await getReport();
    setReport(report);
  }

  if (!report) {
    return <NotFound />;
  }

  const control = report.controls.find(c => c.id === controlId);

  if (!control) {
    return <NotFound />;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Button variant="outlined" onClick={() => navigate("/project")}>
        Back
      </Button>

      <Typography variant="h4" sx={{ mt: 3, fontWeight: 700 }}>
        {control.title}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <OverallMaturityCard level={control.level} />
      </Box>

      {/* Side-by-side layout */}
      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4
        }}
      >
        {/* Completed */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "#f5f5f5"
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Completed
          </Typography>

          {control.completed.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1.5,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: "#e8f5e9",
                border: "1px solid #c8e6c9"
              }}
              onClick={() => navigate(`/project/${controlId}/${item.id}`)}
            >
              <Checkbox checked disabled />
              <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Paper>

        {/* Remaining */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "#f5f5f5"
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Remaining
          </Typography>

          {control.remaining.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1.5,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: "#fff3e0",
                border: "1px solid #ffe0b2"
              }}
            >
              <Checkbox disabled />
              <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>
    </Container>
  );
}
