import {combineReducers} from 'redux';
import sessionReducer from './session/session_reducer';


const entitiesReducer = (state={},action)=> {
  Object.freeze(state);

  switch(action.type){
    default:
      return state;
  }
};

export default entitiesReducer;