import { Box, Button, Paper, Typography } from "@mui/material";

export default function Login() {
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

                <Typography
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Sign in to create and manage your Essential Eight
                    assessments.
                </Typography>

                <Button
                    fullWidth
                    size="large"
                    variant="contained"
                >
                    Continue with Google
                </Button>
            </Paper>
        </Box>
    );
}