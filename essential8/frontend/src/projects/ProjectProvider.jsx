import { createContext, useState } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {

    const [project, setProject] = useState(null);

    function createProject() {
        const newProject = {
            id: crypto.randomUUID(), 
            createdAt: new Date().toISOString(),
            answers: {}
        }

        setProject(newProject);

        return newProject;
    }
    return (
        <ProjectContext.Provider 
            value={{
                project, 
                createProject
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}