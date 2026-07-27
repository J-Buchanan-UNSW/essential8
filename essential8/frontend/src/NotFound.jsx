import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "80vh",
          marginTop: "10vh",
        }}
      >
        <Card elevation={4} sx={{ width: "100%", borderRadius: 3 }}>
          <CardContent sx={{ p: 6, textAlign: "center" }}>
            <Typography
              variant="h2"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              404
            </Typography>

            <Typography variant="h5" fontWeight={600}>
              Page Not Found
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 2, mb: 4 }}>
              Sorry, we couldn't find the page you requested.
            </Typography>

            <Button component={RouterLink} to="/" variant="contained">
              Back Home
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
