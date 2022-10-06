import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

store.subscribe(renderApp);

export default renderApp;
