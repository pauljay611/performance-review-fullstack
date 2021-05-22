import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchAllUsers } from "../store/users/actions";

export const useUser = () => {
  const [currentUserID, setCurrentUserID] = useState<number>();

  const { users, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  useEffect(() => {
    if (users.length === 0) return;
    setCurrentUserID(users[0].id);
  }, [users]);

  return {
    currentUserID,
    setCurrentUserID,
    users,
    loading,
  } as const;
};
