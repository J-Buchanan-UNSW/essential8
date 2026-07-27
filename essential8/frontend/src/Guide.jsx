import { Button, Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import AdminMfaGuide from "./guides/mfa/AdminMfaGuide";

export default function Guide() {
  const { projectId, controlId, guideId } = useParams();
  const navigate = useNavigate();
  console.log(controlId, guideId);
  console.log(controlId === "admin-mfa");
  const guides = {
    "admin-mfa": AdminMfaGuide,
  };

  let ReturnedPage = guides[guideId] || NotFound;

  return (
    <>
      <Container sx={{ py: 4 }}>
        <Button
          variant="outlined"
          onClick={() => navigate(`/project/${projectId}/${controlId}`)}
        >
          Back
        </Button>
      </Container>
      <ReturnedPage />
    </>
  );
}
