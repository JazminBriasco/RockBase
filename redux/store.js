import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducer from './reducers/userReducer'
import roomReducer from "./reducers/roomReducer";


const rootReducer = combineReducers({
  userReducer, 
  roomReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));