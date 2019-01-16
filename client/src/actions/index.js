import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_PROFILE,
  CREATE_PROFILE
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const fetchProfile = () => async dispatch => {
  const res = await axios.get("/api/profile");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const createProfile = () => async dispatch => {
  const res = await axios.post("/api/profile");

  dispatch({ type: CREATE_PROFILE, payload: res.data });
};
