import { useEffect, useState } from "react";
import * as projectApi from "./api/projectApi";
import { LoadingScreen } from "./LoadingScreen";

import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Stack,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import { useProject } from "./projects/useProject";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { createProject } = useProject();
  const navigate = useNavigate();

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      const data = await projectApi.getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Failed to load projects:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateProject() {
    try {
      const project = await projectApi.createProject();
      navigate(`/wizard/${project.id}`);
    } catch (err) {
      console.log("Failed to make project", err)
    }

  }

  async function handleProjectClick(project) {

    if (project.status === "Draft") {
      navigate(`/wizard/${project.id}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  }

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "complete":
        return "success";
      case "in progress":
        return "warning";
      case "draft":
      default:
        return "default";
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  const isSingle = projects.length === 1;

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: 4,
        py: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          mt: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Projects
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreateProject}
        >
          New Project
        </Button>
      </Box>
      {/* Projects Grid */}
      {projects.length === 0 ? (
        <Typography color="text.secondary">
          No projects found. Create one to get started!
        </Typography>
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent={isSingle ? "center" : "flex-start"}
        >
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  transition: "0.2s",
                  "&:hover": {
                    boxShadow: 4,
                    borderColor: "primary.main",
                  },
                }}
              >
                <CardActionArea
                  onClick={() => handleProjectClick(project)}
                  sx={{ height: "100%", p: 1 }}
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="start"
                      sx={{ mb: 2 }}
                    >
                      <FolderIcon color="action" />
                      <Chip
                        label={project.status || "Draft"}
                        size="small"
                        color={getStatusColor(project.status)}
                      />
                    </Stack>

                    <Typography
                      variant="h6"
                      noWrap
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      {project.name || "Untitled Project"}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      sx={{ mt: 1 }}
                    >
                      Updated:{" "}
                      {new Date(project.updatedAt).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
