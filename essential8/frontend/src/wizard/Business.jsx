import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Business() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        py: 2,
      }}
    >
      <Box
        sx={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center"
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Tell us about your organisation
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          label="Organisation name"
          placeholder="e.g. Acme Pty Ltd"
          fullWidth
        />

        <TextField
          label="Industry"
          placeholder="e.g. Healthcare, Education, Retail"
          fullWidth
        />

        <TextField
          label="Number of employees"
          type="number"
          helperText="Approximate is fine."
          fullWidth
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        <Button
          component={Link}
          to="/wizard/step2"
          variant="contained"
          size="large"
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
