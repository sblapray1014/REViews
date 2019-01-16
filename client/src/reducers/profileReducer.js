import { FETCH_PROFILE, CREATE_PROFILE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload || false;
    case CREATE_PROFILE:
      return action.payload || false;
    default:
      return state;
  }
}
