import { useNavigate, useParams } from "react-router-dom";

export function useWizardNavigation() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  function goTo(step) {
    navigate(`/wizard/${projectId}/${step}`);
  }

  return { goTo };
}
