import { RECEIVE_HOST, RECEIVE_USER } from "../../actions/host_actions";
import merge from 'lodash/merge'

const hostsReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_HOST:
      newState = action.host;
      return newState;
    
    // case RECEIVE_USER:
    //   newState = action.user;

    default:
      return state;
  }


}

export default hostsReducer;