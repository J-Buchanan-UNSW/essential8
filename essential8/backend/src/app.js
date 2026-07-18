const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const projectRoutes = require("./routes/project.routes");
const authRoutes = require("./routes/auth.routes")

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;