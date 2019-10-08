import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../../actions/session_actions";

const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = {
        currentUser: action.user
      };
      return newState;

    case LOGOUT_CURRENT_USER:
      newState = _nullUser;
      return newState;

    default:
      return state;
  }
};

export default sessionReducer;