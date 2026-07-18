import {
  Card,
  CardContent,
  Typography,
  Divider,
  Stack
} from "@mui/material";

export default function OrganisationCard({ organisation }) {

  return (
    <Card elevation={3}>
      <CardContent>

        <Typography variant="h5">
          Organisation
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>

          <Typography>
            <strong>Business</strong><br />
            {organisation.businessName}
          </Typography>

          <Typography>
            <strong>Industry</strong><br />
            {organisation.industry}
          </Typography>

          <Typography>
            <strong>Employees</strong><br />
            {organisation.employees}
          </Typography>

        </Stack>

      </CardContent>
    </Card>
  );
}