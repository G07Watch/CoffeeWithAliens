import {combineReducers} from "redux";
import sessionErrorsReducer from "./session/sessions _error_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
})

export default errorsReducer