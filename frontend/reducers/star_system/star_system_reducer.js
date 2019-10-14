import { RECEIVE_ALL_STARSYSTEMS, RECEIVE_STARSYSTEM } from "../../actions/star_system_actions";
import merge from "lodash/merge";


const starSystemReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_ALL_STARSYSTEMS:
      // action.starSystems.map(star=>({ [star.id]: star} ));
      newState = merge({},state, action.starSystems);
      return newState;

    case RECEIVE_STARSYSTEM:
      newState = merge({}, state, { [action.starSystem.id]: action.starSystem });
      return newState;
      
    default:
      return state;
  }

}

export default starSystemReducer;