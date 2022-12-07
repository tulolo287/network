import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
   profileReducer,
   messageReducer,
   usersReducer,
   authReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
