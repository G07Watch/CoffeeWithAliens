import {combineReducers} from "redux";
import sessionErrorsReducer from "./session/sessions_error_reducer";
import starSystemErrorsReducer from "./star_system/star_system_error_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  starSystem: starSystemErrorsReducer
})

export default errorsReducer