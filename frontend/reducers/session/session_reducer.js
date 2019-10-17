import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../../actions/session_actions";
import merge from "lodash/merge";
import { RECEIVE_USER, RECEIVE_HOST } from "../../actions/host_actions";
import { RECEIVE_ALL_USER_COFFEE } from "../../actions/coffee_actions";
const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = { currentUser: action.user }
      newState = merge({}, state, currentUser);
      return newState;

    case RECEIVE_HOST:
      let host = { host: action.host} 
      newState = merge({},state, host);
         action.host;
      return newState;

    case RECEIVE_USER:
      let user = { user: action.hostUser }
      newState = merge({}, state, user);
      return newState;

    case RECEIVE_ALL_USER_COFFEE:
      let allUsers = {}
       Object.values(action.userCoffees).forEach(user =>{
        allUsers[user.id]= user}
      )

      let coffeeTimes = { user_coffee_times: allUsers  }  


      newState = merge({}, state, coffeeTimes)
      return newState;


    case LOGOUT_CURRENT_USER:
      newState = _nullUser;
      return newState;

    default:
      return state;
  }
};

export default sessionReducer;