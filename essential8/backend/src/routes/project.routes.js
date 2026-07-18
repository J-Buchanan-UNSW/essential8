const express = require("express");

const authenticate = require("../middleware/auth.middleware");
const projectController = require("../controllers/project.controller");

const router = express.Router();

router.post("/", authenticate, projectController.createProject);
router.get("/current", authenticate, projectController.getCurrentProject);
router.get("/", authenticate, projectController.getProjects);
router.patch("/:id", authenticate, projectController.updateProject);

router.get("/:id/report", authenticate, projectController.getProjectReport);

module.exports = router;