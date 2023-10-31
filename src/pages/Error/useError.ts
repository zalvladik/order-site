import { useNavigate } from "react-router-dom";

import { RoutesPath } from "../../router/routes";

export const useError = () => {
  const navigate = useNavigate();

  const toHomepage = (): void => navigate(RoutesPath.HOME);

  return { toHomepage };
};
