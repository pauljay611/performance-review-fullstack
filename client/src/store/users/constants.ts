const FETCH_ALL_USERS_SUCCESS = "@USER/FETCH_ALL_SUCCESS";

const FETCH_ALL_USERS = "@USER/FETCH_ALL";

const FETCH_ALL_USERS_ERROR = "@USER/FETCH_ALL_ERROR";

const FETCH_USER_SUCCESS = "@USER/FETCH_USER_SUCCESS";

const FETCH_USER = "@USER/FETCH_USER";

const FETCH_USER_ERROR = "@USER/FETCH_USER_ERROR";

const ADD_USER_SUCCESS = "@USER/ADD_USER_SUCCESS";

const ADD_USER = "@USER/ADD_USER";

const ADD_USER_ERROR = "@USER/ADD_USER_ERROR";

const UPDATE_USER_SUCCESS = "@USER/UPDATE_USER_SUCCESS";

const UPDATE_USER = "@USER/UPDATE_USER";

const UPDATE_USER_ERROR = "@USER/UPDATE_USER_ERROR";

const DELETE_USER_SUCCESS = "@USER/DELETE_USER_SUCCESS";

const DELETE_USER = "@USER/DELETE_USER";

const DELETE_USER_ERROR = "@USER/DELETE_USER_ERROR";

export default {
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_ERROR,
  FETCH_USER_SUCCESS,
  FETCH_USER,
  FETCH_USER_ERROR,
  ADD_USER_SUCCESS,
  ADD_USER,
  ADD_USER_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  DELETE_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_ERROR,
} as const;
