import React from "react";
import store from "./store/redux-store";

const StoreContext = React.createContext(store);

export const Provider = (props) => {
  <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>;
};

export default StoreContext;
