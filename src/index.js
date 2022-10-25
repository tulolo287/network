import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/redux-store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const renderApp = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} store={store} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

renderApp(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderApp(state);
});

export default renderApp;
