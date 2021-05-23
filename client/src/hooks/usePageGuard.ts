import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useUser } from "./useUser";
import Cookies from "js-cookie";

export const usePageGuard = (isAdmin: boolean) => {
  const history = useHistory();
  const { currentUser, loading } = useUser();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      history.push("/");
      return;
    }
    if (loading || !currentUser) return;
    const { is_admin } = currentUser;
    if (is_admin !== isAdmin) {
      history.push("/");
    }
  }, [currentUser, loading]);
};
