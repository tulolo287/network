import "./dialogs.module.css";

const Dialogs = (props) => {
  const messsages = props.messages.map((message) => message.text);
  const senders = props.senders.map((sender) => sender.name);

  const onMessageChange = (e) => {
    let newMessage = e.target.value;
    console.log(newMessage);
    props.onMessageChange(newMessage);
  };

  return (
    <div className="dialog_wrapper">
      <div className="dialog__person">
        <h3>{senders}:</h3>
      </div>
      <div className="dialog__text">{messsages}</div>
      <textarea value={props.newMessage} onChange={onMessageChange}></textarea>
      <button onClick={props.sendMessage}>Add message</button>
    </div>
  );
};
export default Dialogs;
