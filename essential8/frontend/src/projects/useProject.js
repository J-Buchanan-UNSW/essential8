import { useContext } from "react";
import { ProjectContext } from "./ProjectProvider";

export function useProject() {
  return useContext(ProjectContext);
}
