import {combineReducers} from 'redux';
import sessionReducer from './session/session_reducer';
import starSystemReducer from './star_system/star_system_reducer';


const entitiesReducer = combineReducers({
  starSystems: starSystemReducer,
});

export default entitiesReducer;