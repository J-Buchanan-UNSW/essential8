import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import { LoadingScreen } from "./LoadingScreen";
import * as projectApi from "./api/projectApi";

import OverallMaturityCard from "./components/OverallMaturityCard";
import ControlsList from "./components/ControlsList";
import OrganisationCard from "./components/OrganisationCard";

export default function Project() {
  const { projectId } = useParams();

  const [report, setReport] = useState(null);

  useEffect(() => {
    loadReport();
  }, [projectId]);

  async function loadReport() {
    const report = await projectApi.getProjectReport(projectId);

    setReport(report);
  }

  if (!report) {
    return <LoadingScreen />;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <OverallMaturityCard level={report.overallLevel} />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <ControlsList controls={report.controls} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <OrganisationCard organisation={report.organisation} />
        </Grid>
      </Grid>
    </Container>
  );
}
