import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

import { LoadingScreen } from "./LoadingScreen";
import { useProject } from "./projects/useProject";
import { getProjectReport } from "./api/projectApi";

import OverallMaturityCard from "./components/OverallMaturityCard";
import ControlsList from "./components/ControlsList";
import OrganisationCard from "./components/OrganisationCard";

export default function Project() {
  const { project } = useProject();
  const [report, setReport] = useState(null);

  useEffect(() => {
    if (!project) return;

    async function loadReport() {
      const result = await getProjectReport(project.id);
      setReport(result);
    }

    loadReport();
  }, [project]);

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