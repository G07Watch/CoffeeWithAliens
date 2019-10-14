import {combineReducers} from "redux";
import sessionErrorsReducer from "./session/sessions_error_reducer";
import starSystemErrorsReducer from "./star_system/star_system_error_reducer";
import hostErrorsReducer from "./hosts/hosts_error_reducer";
import coffeeTimesErrorsReducer from "./coffee_times/coffee_times_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  starSystem: starSystemErrorsReducer,
  hosts: hostErrorsReducer,
  coffeeTimes: coffeeTimesErrorsReducer
})

export default errorsReducer