import { createContext, useState } from "react";
import * as projectApi from "../api/projectApi";

export const ProjectContext = createContext();

export function ProjectProvider({ project: initialProject, children }) {
  const [project, setProject] = useState(initialProject);

  async function updateAnswers(newAnswers) {
    const updated = await projectApi.updateProject(project.id, {
      answers: newAnswers,
    });

    setProject(updated);

    return updated;
  }

  async function updateProject(updates) {
    const updated = await projectApi.updateProject(project.id, updates);

    setProject(updated);

    return updated;
  }

  async function getReport() {
    return await projectApi.getProjectReport(project.id);
  }

  return (
    <ProjectContext.Provider
      value={{
        project,
        updateAnswers,
        updateProject,
        getReport,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
