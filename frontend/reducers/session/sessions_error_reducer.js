import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAN_ERRORS } from '../../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state); 
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;

    case RECEIVE_CURRENT_USER:
      return {};


    case CLEAN_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default sessionErrorsReducer;