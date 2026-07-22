import { Card, CardContent, Typography, Box } from "@mui/material";

export default function OrganisationCard({ organisation }) {
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        p: 1.5
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Organisation
        </Typography>

        <Box sx={{ mt: 3 }}>
          <InfoBlock label="Business" value={organisation.businessName} />
          <InfoBlock label="Industry" value={organisation.industry} />
          <InfoBlock label="Employees" value={organisation.employees} />
        </Box>
      </CardContent>
    </Card>
  );
}

function InfoBlock({ label, value }) {
  return (
    <Box
      sx={{
        mb: 2.5,
        p: 2,
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
        border: "1px solid #e0e0e0"
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1rem",
          mb: 0.5,
          color: "#424242"
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: "1.1rem",
          fontWeight: 500,
          color: "#212121"
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
