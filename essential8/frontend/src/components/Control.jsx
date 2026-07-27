import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as projectApi from "../api/projectApi";

import { LoadingScreen } from "../LoadingScreen";
import OverallMaturityCard from "./OverallMaturityCard";
import NotFound from "../NotFound";

import {
  Box,
  Button,
  Container,
  Typography,
  Checkbox,
  Paper,
} from "@mui/material";

export default function Control() {
  const { projectId, controlId } = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReport() {
      try {
        const report = await projectApi.getProjectReport(projectId);
        setReport(report);
      } finally {
        setLoading(false);
      }
    }

    loadReport();
  }, [projectId]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!report) {
    return <NotFound />;
  }

  const control = report.controls.find((c) => c.id === controlId);

  if (!control) {
    return <NotFound />;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Button
        variant="outlined"
        onClick={() => navigate(`/project/${projectId}`)}
      >
        Back
      </Button>

      <Typography variant="h4" sx={{ mt: 3, fontWeight: 700 }}>
        {control.title}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <OverallMaturityCard level={control.level} />
      </Box>

      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Completed
          </Typography>

          {control.completed.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1.5,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: "#e8f5e9",
                border: "1px solid #c8e6c9",
                cursor: "pointer",
              }}
              onClick={() =>
                navigate(`/project/${projectId}/${controlId}/${item.id}`)
              }
            >
              <Checkbox checked disabled />
              <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Remaining
          </Typography>

          {control.remaining.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1.5,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: "#fff3e0",
                border: "1px solid #ffe0b2",
              }}
              onClick={() =>
                navigate(`/project/${projectId}/${controlId}/${item.id}`)
              }
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
