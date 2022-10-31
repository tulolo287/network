import { connect } from "react-redux";
import Dialogs from "./index";

const mapToState = (state) => {
  return {
    messages: state.messageReducer.messages,
    senders: state.messageReducer.senders,
    newMessage: state.messageReducer.newMessage
  };
};

const mapToDispatch = (dispatch) => {
  return {
    onMessageChange: (message) => {
      dispatch({ type: "UPDATE_NEW_MESSAGE_TEXT", message });
    },
    sendMessage: () => {
      dispatch({ type: "ADD_NEW_MESSAGE" });
    }
  };
};

const DialogsContainer = connect(mapToState, mapToDispatch)(Dialogs);
export default DialogsContainer;
