import { combineReducers } from "redux";

import {
  SET_ERROR,
  GET_NOTES,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SET_LOADING,
  UNSET_LOADING,
  UNSET_ERROR,
  GET_SINGLE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  STAR_NOTE,
  UNSTAR_NOTE,
} from "../actions/actions";

const notesReducer = (
  state = {
    error: false,
    notes: null,
    errormessage: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case GET_NOTES:
      return { ...state, notes: action.payload };

    default:
      return state;
  }
};

const testPaperReducer = (
  state = {
    error: false,
    notes: null,
    errormessage: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case GET_NOTES:
      return { ...state, notes: action.payload };

    default:
      return state;
  }
};

const userReducer = (
  state = {
    user: null,
    theme: "light",
    error: false,
    loading: false,
    errormessage: null,
  },
  action
) => {
  switch (action.type) {
    case REGISTER_USER:
      let newstate = { ...state, user: action.payload };
      return { ...newstate };
    case LOGIN_USER:
      let newstate2 = { ...state, user: action.payload };
      return { ...newstate2 };
    case LOGOUT_USER:
      let newstate3 = { ...state, user: null };
      return { ...newstate3 };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UNSET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
        errormessage: action.payload,
      };
    case UNSET_ERROR:
      return {
        ...state,
        error: false,
        errormessage: null,
      };
    case GET_SINGLE_NOTE:
      return { ...state };
    case UPDATE_NOTE:
      return { ...state };
    case DELETE_NOTE:
      return { ...state };
    case STAR_NOTE:
      return { ...state };
    case UNSTAR_NOTE:
      return { ...state };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  // notesReducer,
  userReducer,
  // testPaperReducer,
});

export default rootReducer;
