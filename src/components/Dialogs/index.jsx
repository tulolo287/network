import { addNewMessageActionCreator, updateNewMessageActionCreator } from "../../store";
import "./dialogs.module.css";


const Dialogs = (props) => {

  const messsages = props.dialogs.messages.map(message => message.text)
  const senders = props.dialogs.senders.map(sender => sender.name)

  const onMessageChange = (e) => {
    let newMessage = e.target.value;
    props.dispatch(updateNewMessageActionCreator(newMessage));
    console.log(newMessage);
  }
  const sendMessage = () => {
    props.dispatch(addNewMessageActionCreator());
  }

  return (
    <div className="dialog_wrapper">
      <div className="dialog__person">
        <h3>{senders}:</h3>
      </div>
      <div className="dialog__text">{messsages}</div>
      <textarea value={props.dialogs.newMessage} onChange={onMessageChange}></textarea>
      <button onClick={sendMessage}>Add message</button>
    </div>
  );
};
export default Dialogs;
