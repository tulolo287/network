import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";

const store = {
  _state: {},
  dispatch(action) {
    this._state = profileReducer(this.getState(), action);
    this._state = messageReducer(this.getState(), action);
    this._callSubscriber();
  },
  _callSubscriber() {
    console.log("subscriber");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

window.store = store;

export default store;
