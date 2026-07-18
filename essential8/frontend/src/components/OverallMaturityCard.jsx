import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

export default function OverallMaturityCard({ level }) {
  return (
    <Card elevation={3}>
      <CardContent>

        <Typography variant="h5">
          Overall Maturity
        </Typography>

        <Typography
          variant="h2"
          align="center"
          sx={{ mt: 3 }}
        >
          Level {level}
        </Typography>

      </CardContent>
    </Card>
  );
}