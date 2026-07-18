const { evaluateProject } = require("../services/evaluation/evaluateProject");

const projects = [];

function createProject(req, res) {
    const project = {
        id: crypto.randomUUID(),
        owner: req.user.sub,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        name: "New Assessment", 
        status: "Draft",
        answers: {},
    };

    projects.push(project);

    console.log("Create new project", project.id)

    res.status(201).json(project);
}

function getCurrentProject(req, res) {
    const project = projects.find(
        (project) => project.owner === req.user.sub
    );

    if (!project) {
        return res.status(404).json({
            message: "No project found",
        });
    }

    res.json(project);
}

function getProjects(req, res) {
    const userProjects = projects.filter(
        project => project.owner === req.user.sub
    );

    res.json(userProjects);
}

function updateProject(req, res) {
    const project = projects.find(
        p => p.id === req.params.id && p.owner === req.user.sub
    );

    if (!project) {
        return res.status(404).json({
            error: "Project not found",
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
    project.updatedAt = new Date().toISOString();

    console.log(`Project right now:\n${JSON.stringify(project, null, 2)}`);

    res.json(project);
}

function getProjectReport(req, res) {

    const project = projects.find(
        p => p.id === req.params.id && p.owner === req.user.sub
    );

    const report = evaluateProject(project); 

    res.json(report);
}

module.exports = {
    createProject,
    getCurrentProject, 
    getProjects, 
    updateProject, 
    getProjectReport
};