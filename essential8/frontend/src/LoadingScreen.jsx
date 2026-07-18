import { Box, CircularProgress, Typography } from "@mui/material";

export function LoadingScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        gap: 2,
      }}
    >
      <CircularProgress />
      <Typography>Loading...</Typography>
    </Box>
  );
}
