import { Box, Button, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { signInWithRedirect } from "aws-amplify/auth";

export default function Login() {
  const location = useLocation();

  const redirectTo = location.state?.from ?? "/";

  const login = async () => {
    await signInWithRedirect({
      provider: "Google",
      customState: redirectTo,
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f7fa",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 6,
          width: 420,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Essential Eight
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Sign in to create and manage your Essential Eight assessments.
        </Typography>

        <Button fullWidth size="large" variant="contained" onClick={login}>
          Continue with Google
        </Button>
      </Paper>
    </Box>
  );
}
