import React from "react";
import Dialogs from "../components/Dialogs";

const Messages = (props) => {
  return (
    <div>
      Messages
      <Dialogs dialogs={props.dialogs} dispatch={props.dispatch} />
    </div>
  );
};

export default Messages;
