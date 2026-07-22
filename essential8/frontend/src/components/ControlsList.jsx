import {
  Card,
  CardContent,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  Box
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const levelColors = {
  0: "#b71c1c",
  1: "#e65100",
  2: "#fbc02d",
  3: "#43a047",
  4: "#1b5e20"
};

export default function ControlsList({ controls }) {
  const navigate = useNavigate();
  const { projectId } = useParams();
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        p: 1.5
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Essential Eight Controls
        </Typography>

        <List sx={{ width: "100%" }}>
          {controls.map((control) => (
            <ListItemButton
              key={control.id}
              onClick={() => navigate(`/project/${projectId}/${control.id}`)}
              sx={{
                mb: 1,
                borderRadius: 2,
                backgroundColor: "#f5f5f5",
                border: "1px solid #e0e0e0",
                "&:hover": {
                  backgroundColor: "#eeeeee"
                }
              }}
            >
              <ListItemText
                primary={control.title}
                primaryTypographyProps={{
                  sx: { fontWeight: 600, fontSize: "1.1rem" }
                }}
              />

              <Box sx={{ ml: 2 }}>
                <Chip
                  label={`Level ${control.level}`}
                  sx={{
                    fontWeight: 600,
                    backgroundColor: levelColors[control.level],
                    color: "white"
                  }}
                />
              </Box>
            </ListItemButton>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
