import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import merge from l

export const sessionReducer = (state ={}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      

    default:
      return state;
  }
}