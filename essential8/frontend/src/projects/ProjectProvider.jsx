import { createContext, useEffect, useState } from "react";
import * as projectApi from "../api/projectApi";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function createProject() {
    setIsLoading(true);
    const project = await projectApi.createProject();

    setProject(project);

    setIsLoading(false);
    return project;
  }

  async function updateAnswers(newAnswers) {
    if (!project) {
      throw new Error("No active project");
    }
    const updatedProject = await projectApi.updateProject(project.id, {
      answers: newAnswers,
    });

    setProject(updatedProject);

    return updatedProject;
  }

  async function updateProject(updates) {
    if (!project) {
      throw new Error("No active project");
    }

    const updatedProject = await projectApi.updateProject(project.id, updates);

    setProject(updatedProject);

    return updatedProject;
  }

  async function getReport() {
    if (!project) {
      throw new Error("No active project");
    }

    return await projectApi.getProjectReport(project.id);
  }

  return (
    <ProjectContext.Provider
      value={{
        project,
        isLoading,
        createProject,
        setProject,
        updateAnswers,
        updateProject,
        getReport,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
