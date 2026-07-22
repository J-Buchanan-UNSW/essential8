const { evaluateProject } = require("../services/evaluation/evaluateProject");
const projectRepository = require("../repositories/projectRepository");

async function createProject(req, res) {
    try {
        const project = {
            id: crypto.randomUUID(),
            owner: req.user.sub,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            name: "New Assessment", 
            status: "Draft",
            answers: {},
        };

        const savedProject = await projectRepository.createProject(project);
        
        console.log("Create new project", savedProject.id)
        
        res.status(201).json(savedProject);
    } catch(err) {
        console.error(err);
        res.status(500).json({
            message: "Failed to create project",
        });
    }

}

async function getProject(req, res) {
  const project = await projectRepository.getProjectById(
    req.params.id,
    req.user.sub
  );

  if (!project) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  res.json(project);
}

async function getProjects(req, res) {
    try {
        const projects = await projectRepository.getProjectsByOwner(req.user.sub);

        res.json(projects);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Failed to load projects",
        });
    }
}

async function updateProject(req, res) {
    try {
        const project = await projectRepository.getProjectById(
            req.params.id,
            req.user.sub
        );

        if (!project) {
            return res.status(404).json({
            message: "Project not found",
        });
}

        if (req.body.name !== undefined) {
            project.name = req.body.name;
        }

        if (req.body.status !== undefined) {
            project.status = req.body.status;
        }

        if (req.body.answers) {
            project.answers = {
                ...project.answers,
                ...req.body.answers,
            };
        }
        const updated = await projectRepository.updateProject(project);

        res.json(updated);
    } catch(err) {
        console.error(err);

        res.status(500).json({
            message: "Failed to update project",
        });
    }

}

async function getProjectReport(req, res) {
    try {

        const project = await projectRepository.getProjectById(
            req.params.id,
            req.user.sub
        );

        if (!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }

        const report = evaluateProject(project);

        res.json(report);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Failed to generate report",
        });

    }
}

module.exports = {
    createProject,
    getProject, 
    getProjects, 
    updateProject, 
    getProjectReport
};