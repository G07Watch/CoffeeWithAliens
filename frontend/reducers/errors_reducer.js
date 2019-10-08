import {combineReducers} from "redux";
import sessionErrorsReducer from "./session/sessions_error_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
})

export default errorsReducer