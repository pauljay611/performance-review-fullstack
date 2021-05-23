import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import { RootState } from "../store";
import { fetchAllUsers, fetchUser } from "../store/users/actions";
import Cookies from "js-cookie";

export const useUsers = () => {
  const { users, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return {
    users,
    loading,
    error,
  } as const;
};

export const useUser = () => {
  const { currentUser, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) return;
    const { id } = jwtDecode<{ id: number }>(token);
    dispatch(fetchUser({ id }));
  }, []);

  return {
    currentUser,
    loading,
    error,
  } as const;
};
