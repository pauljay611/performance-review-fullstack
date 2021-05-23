import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import { useUser } from "./useUser";

export const usePageGuard = () => {
  const history = useHistory();
  const path = history.location.pathname.split("/");
  const { currentUser, loading, error } = useUser();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      history.push("/");
      return;
    }
    if (loading) return;
    if (currentUser) {
      if (currentUser.is_admin && path[1] === "employee") {
        history.push("/admin");
        return;
      }
      if (currentUser.is_admin && path[1] === "admin") {
        history.push(history.location.pathname);
        return;
      }
      if (!currentUser.is_admin && path[1] === "admin") {
        history.push("/employee");
        return;
      }
      if (!currentUser.is_admin && path[1] === "employee") {
        history.push(history.location.pathname);
        return;
      }
      const defaultPath = currentUser.is_admin ? "/admin" : "/employee";
      history.push(defaultPath);
      return;
    }
  }, [currentUser, error, loading]);
};
