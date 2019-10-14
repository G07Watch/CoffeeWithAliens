import { RECEIVE_HOST_ERROR, RECEIVE_HOST, RECEIVE_ALL_HOSTS } from "../../actions/host_actions";


const starSystemErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_HOST_ERROR:
      return action.errors;

    case RECEIVE_HOST:
      return {};

    case RECEIVE_ALL_HOSTS:
      return {};

    default:
      return state;
  }
}