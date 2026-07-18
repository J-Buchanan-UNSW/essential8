import {
  Card,
  CardContent,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Chip
} from "@mui/material";

export default function ControlsList({ controls }) {

  return (
    <Card elevation={3}>
      <CardContent>

        <Typography variant="h5" gutterBottom>
          Essential Eight Controls
        </Typography>

        <List>

          {controls.map(control => (

            <ListItemButton
              key={control.id}
            >

              <ListItemText
                primary={control.title}
              />

              <Chip
                label={`Level ${control.level}`}
              />

            </ListItemButton>

          ))}

        </List>

      </CardContent>
    </Card>
  );
}