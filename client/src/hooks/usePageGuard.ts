import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useUser } from "./useUser";

export const usePageGuard = (isAdmin: boolean) => {
  const history = useHistory();
  const { currentUser, loading } = useUser();
  useEffect(() => {
    if (loading || !currentUser) return;
    const { is_admin } = currentUser;
    if (is_admin !== isAdmin) {
      history.push("/");
    }
  }, [currentUser, loading]);
};
