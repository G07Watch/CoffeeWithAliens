import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAN_ERRORS } from '../../actions/session_actions';
import { RECEIVE_HOST_ERROR } from '../../actions/host_actions';
import { RECEIVE_COFFEE_ERRORS } from '../../actions/coffee_actions';
 
const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state); 
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;

    case RECEIVE_HOST_ERROR:
      return action.errors;

    case CLEAN_ERRORS:
      return action.errors;

    case RECEIVE_COFFEE_ERRORS:
      return action.errors;

    case RECEIVE_CURRENT_USER:
      return {};

    default:
      return state;
  }
}

export default sessionErrorsReducer;