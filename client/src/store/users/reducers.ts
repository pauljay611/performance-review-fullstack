import { createReducer } from "typesafe-actions";
import { UserState, UsersActionsType } from "./types";
import actions from "./actions";

const initialState: UserState = {
  loading: false,
};

const reducer = createReducer<UserState, UsersActionsType>(initialState)
  .handleAction(actions.fetchAllUsersSuccess, (_, actions) => ({
    users: actions.payload,
    loading: false,
  }))
  .handleAction(actions.fetchAllUsers, (state) => {
    return { users: state.users, loading: true };
  })
  .handleAction(actions.fetchAllUsersError, (_, actions) => {
    return { users: [], loading: false, error: actions.payload };
  })
  .handleAction(actions.fetchUserSuccess, (_, actions) => {
    return {
      currentUser: actions.payload,
      loading: false,
    };
  })
  .handleAction(actions.fetchUser, (state) => {
    return { currentUser: state.currentUser, loading: true };
  })
  .handleAction(actions.fetchUserError, (_, actions) => {
    return { loading: false, error: actions.payload };
  });

export default reducer;
