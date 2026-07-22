import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as projectApi from "./api/projectApi";

import { ProjectProvider } from "./projects/ProjectProvider";
import { LoadingScreen } from "./LoadingScreen";
import Wizard from "./Wizard";

export default function WizardPage() {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      const project = await projectApi.getProject(projectId);

      setProject(project);

      setLoading(false);
    }

    loadProject();
  }, [projectId]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ProjectProvider project={project}>
      <Wizard />
    </ProjectProvider>
  );
}