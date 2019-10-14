import { RECEIVE_HOST, RECEIVE_USER, RECEIVE_ALL_HOSTS } from "../../actions/host_actions";
import merge from 'lodash/merge'

const hostsReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_ALL_HOSTS:
      debugger
      let hosts = Object.values(action.hosts).map(host =>  ({[host.id]: host})  )

      newState = merge({}, state, hosts);
      return newState;

    case RECEIVE_HOST:
      newState = merge({}, state, {[action.host.id]: action.host});
      return newState;
    
    // case RECEIVE_USER:
    //   newState = action.user;

    default:
      return state;
  }


}

export default hostsReducer;