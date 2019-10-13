import {combineReducers} from 'redux';
import sessionReducer from './session/session_reducer';
import starSystemReducer from './star_system/star_system_reducer';
import hostsReducer from './hosts/hosts_reducer';
import coffeeTimesReducer from './coffee_times/coffee_times_reducer';

const entitiesReducer = combineReducers({
  starSystems: starSystemReducer,
  host: hostsReducer,
  coffeeTimes: coffeeTimesReducer
});

export default entitiesReducer;