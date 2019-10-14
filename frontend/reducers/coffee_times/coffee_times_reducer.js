import { RECEIVE_COFFEE_TIMES } from "../../actions/coffee_actions";
import merge from 'lodash/merge';


const coffeeTimesReducer  = (state ={}, action) =>{
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_COFFEE_TIMES:
      newState = merge({}, state,  action.coffeeTimes );  // {}, state, 
      return newState;

    default:
      return state;
  }

}

export default coffeeTimesReducer;