import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const configureStore = (preloadedState ={})=>(
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
)

export default configureStore;