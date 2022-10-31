import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/redux-store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const renderApp = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

renderApp(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderApp(state);
});
window.store = store;
export default renderApp;
