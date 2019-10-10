import { RECEIVE_ERRORS, RECEIVE_STARSYSTEM, RECEIVE_ALL_STARSYSTEMS } from "../../actions/star_system_actions";


const starSystemErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;

    case RECEIVE_STARSYSTEM:
      return {};

    case RECEIVE_ALL_STARSYSTEMS:
      return {};

    default:
      return state;
  }
}

export default starSystemErrorsReducer;