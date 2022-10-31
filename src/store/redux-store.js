import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profileReducer,
  messageReducer,
  usersReducer
});
const store = createStore(reducers);

export default store;
