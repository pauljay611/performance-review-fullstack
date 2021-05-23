import { createReducer } from "typesafe-actions";
import { UserState, UsersActionsType } from "./types";
import actions from "./actions";

const initialState: UserState = {
  loading: false,
};

const reducer = createReducer<UserState, UsersActionsType>(initialState)
  .handleAction(actions.fetchAllUsersSuccess, (state, actions) => ({
    ...state,
    users: actions.payload,
    loading: false,
  }))
  .handleAction(actions.fetchAllUsers, (state) => {
    return { users: state.users, loading: true };
  })
  .handleAction(actions.fetchAllUsersError, (state, actions) => {
    return { ...state, users: [], loading: false, error: actions.payload };
  })
  .handleAction(actions.fetchUserSuccess, (state, actions) => {
    return {
      ...state,
      currentUser: actions.payload,
      loading: false,
    };
  })
  .handleAction(actions.fetchUser, (state) => {
    return { ...state, currentUser: state.currentUser, loading: true };
  })
  .handleAction(actions.fetchUserError, (state, actions) => {
    return { ...state, loading: false, error: actions.payload };
  })
  .handleAction(actions.addUserSuccess, (state) => {
    return {
      ...state,
      loading: false,
    };
  })
  .handleAction(actions.addUser, (state) => {
    return { ...state, loading: true };
  })
  .handleAction(actions.addUserError, (state, actions) => {
    return { ...state, loading: false, error: actions.payload };
  })
  .handleAction(actions.updateUserSuccess, (state) => {
    return {
      ...state,
      loading: false,
    };
  })
  .handleAction(actions.updateUser, (state) => {
    return { ...state, loading: true };
  })
  .handleAction(actions.updateUserError, (state, actions) => {
    return { ...state, loading: false, error: actions.payload };
  });

export default reducer;
