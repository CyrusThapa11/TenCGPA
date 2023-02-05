import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// GENERAL
export const SET_LOADING = "SET_LOADING";
export const UNSET_LOADING = "UNSET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const UNSET_ERROR = "UNSET_ERROR";
// export const UNSET_LOADING = "UNSET_LOADING";

// NOTES
export const GET_NOTES = "GET_NOTES";
export const ADD_NOTES = "ADD_NOTES";
export const GET_SINGLE_NOTE = "GET_SINGLE_NOTE";

export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const STAR_NOTE = "STAR_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const UNSTAR_NOTE = "UNSTAR_NOTE";
export const ADD_COMMENT_ON_NOTE = "ADD_COMMENT_ON_NOTE";
export const REMOVE_COMMENT_ON_NOTE = "REMOVE_COMMENT_ON_NOTE";

// USER
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_UPER = "LOGOUT_USER";

// testpaper
export const GET_TESTPAPERS = "GET_TESTPAPERS";
export const UPDATE_TESTPAPERS = "UPDATE_TESTPAPERS";
export const DELETE_TESTPAPERS = "DELETE_TESTPAPERS";
export const GET_SINGLE_TESTPAPER = "GET_SINGLE_TESTPAPER";

export const STAR_TESTPAPER = "STAR_TESTPAPER";
export const UNSTAR_TESTPAPER = "UNSTAR_TESTPAPER";
export const ADD_COMMENT_ON_TESTPAPER = "ADD_COMMENT_ON_TESTPAPER";
export const REMOVE_COMMENT_ON_TESTPAPER = "REMOVE_COMMENT_ON_TESTPAPER";

// user
export const registerUser = (name, email, password, college) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING });
    console.log("setting loading");
    // console.log(process.env.REACT_APP_BACKEND_URL);

    axios
      .post("http://localhost:5000/api/" + "auth/register", {
        name,
        email,
        password,
        college,
      })
      .then((res) => {
        console.log("get data", res);
        console.log("UNsetting loading");
        dispatch({ type: UNSET_LOADING });
        dispatch({ type: REGISTER_USER, payload: res.data.data });
      })
      .catch((err) => {
        console.log("get error", err);
        console.log("UNsetting loading");
        dispatch({ type: UNSET_LOADING });
        dispatch({ type: SET_ERROR, payload: err.message });
      });

    // const data = [];
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      "http://localhost:5000/api/" + "auth/login",
      {
        email,
        password,
      }
    );
    // const data = [];
    console.log("loginUser", data);

    if (data.error) {
      return dispatch({ type: SET_ERROR, payload: data.message });
    } else return dispatch({ type: LOGIN_USER, payload: data.data });
  };
};

export const logoutUser = () => {
  // const dispatch_ = useDispatch();
  return { type: LOGOUT_USER };
};

// const setUserLoading =

// notes

// export const getNotes = () => ();
export const fetchNotes = () => {
  return async (dispatch) => {
    const data = await axios.get("http://localhost:5000/api/notes");

    return dispatch({ type: GET_NOTES, payload: data });
  };
};

export const addNotes = (
  text,
  description,
  sid,
  subject,
  type,
  title,
  shared = null
) => {
  return async (dispatch) => {
    console.log("setting loading");
    // console.log(process.env.REACT_APP_BACKEND_URL);
    axios
      .post("http://localhost:5000/api/notes", {
        text,
        description,
        sid,
        shared,
        type,
        title,
        subject,
      })
      .then((res) => {
        console.log("get data", res);
        console.log("UNsetting loading");
        // dispatch({ type: ADD_NOTE, payload: res.data });
      })
      .catch((err) => {
        console.log("get error", err);
        console.log("UNsetting loading");
        dispatch({ type: SET_ERROR, payload: err.message });
      });
    // const data = [];
  };
};

export const updateNote = (
  nid,
  description,
  sid,
  subject,
  type,
  title,
  text,
  shared = null
) => {
  return async (dispatch) => {
    console.log("setting loading");
    // console.log(process.env.REACT_APP_BACKEND_URL);

    axios
      .patch(`http://localhost:5000/api/notes/${nid}`, {
        description,
        sid,
        shared,
        type,
        title,
        subject,
        text,
      })
      .then((res) => {
        console.log("get data", res);
        console.log("UNsetting loading");
        // dispatch({ type: ADD_NOTE, payload: res.data });
      })
      .catch((err) => {
        console.log("get error", err);
        console.log("UNsetting loading");
        dispatch({ type: SET_ERROR, payload: err.message });
      });
    // const data = [];
  };
};

// export const selectSubreddit = (subreddit) => ({
//   type: SELECT_SUBREDDIT,
//   subreddit,
// });

// export const invalidateSubreddit = (subreddit) => ({
//   type: INVALIDATE_SUBREDDIT,
//   subreddit,
// });

// export const requestPosts = (subreddit) => ({
//   type: REQUEST_POSTS,
//   subreddit,
// });

// export const receivePosts = (subreddit, json) => ({
//   type: RECEIVE_POSTS,
//   subreddit,
//   posts: json.data.children.map((child) => child.data),
//   receivedAt: Date.now(),
// });

// const fetchPosts = (subreddit) => (dispatch) => {
//   dispatch(requestPosts(subreddit));
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then((response) => response.json())
//     .then((json) => dispatch(receivePosts(subreddit, json)));
// };

// const shouldFetchPosts = (state, subreddit) => {
//   const posts = state.postsBySubreddit[subreddit];
//   if (!posts) {
//     return true;
//   }
//   if (posts.isFetching) {
//     return false;
//   }
//   return posts.didInvalidate;
// };

// export const fetchPostsIfNeeded = (subreddit) => (dispatch, getState) => {
//   if (shouldFetchPosts(getState(), subreddit)) {
//     return dispatch(fetchPosts(subreddit));
//   }
// };
