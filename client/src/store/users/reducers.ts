import { createReducer } from "typesafe-actions";
import { UserState, UsersActionsType } from "./types";
import actions from "./actions";

const initialState: UserState = {
  users: [],
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
  });

export default reducer;
