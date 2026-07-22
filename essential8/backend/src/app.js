const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const projectRoutes = require("./routes/project.routes");
const authRoutes = require("./routes/auth.routes");
const testConnection = require("./db/testConnection");

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
}));

testConnection();

app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;