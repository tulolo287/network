const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const initialState = {
  newMessage: "New message",
  messages: [
    {
      id: 1,
      text: "lkllkjl"
    },
    {
      id: 2,
      text: "2222222212323"
    }
  ],
  senders: [
    {
      id: 1,
      name: "Ivan"
    },
    {
      id: 2,
      name: "John"
    }
  ]
};
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 45, text: state.newMessage }],
        newMessage: ""
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      //state.dialogs.newMessage = action.message;
      return { ...state, newMessage: action.message };
    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => ({
  type: ADD_NEW_MESSAGE
});
export const updateNewMessageActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  message: message
});
export default messageReducer;
