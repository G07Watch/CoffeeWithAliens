import { RECEIVE_COFFEE_TIMES, RECEIVE_COFFEE_ERRORS, RECEIVE_COFFEE } from "../../actions/coffee_actions";
import merge from 'lodash/merge';


const coffeeTimesReducer  = (state ={}, action) =>{
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_COFFEE_TIMES:
      newState = merge( {}, state,  { coffee: action.coffeeTimes} );  // {}, state, 
      return newState;

    case RECEIVE_COFFEE:
      newState = merge({}, state, { coffeeShow: action.coffeeTime} );
      return newState;

    default:
      return state;
  }

}

export default coffeeTimesReducer;