import { Card, CardContent, Typography, Box } from "@mui/material";

export default function OverallMaturityCard({ level }) {
  return (
    <Card elevation={4} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Maturity
        </Typography>

        <Typography
          variant="h3"
          align="center"
          sx={{ mt: 2, fontWeight: 700 }}
        >
          Level {level}
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {[0, 1, 2, 3, 4].map((lvl) => (
            <Box
              key={lvl}
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: lvl === level ? "#2e7d32" : "#e0e0e0",
                color: lvl === level ? "white" : "#555",
                fontWeight: 700,
                fontSize: "1.2rem"
              }}
            >
              {lvl}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
