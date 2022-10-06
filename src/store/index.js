const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const store = {
  _state: {
    addNewPost: "Add new post",
    dialogs: {
      newMessage: "New message",
      messages: [
        {
          id: 1,
          text: "lkllkjl"
        },
        {
          id: 2,
          text: "2222222212323"
        },
      ],
      senders: [
        {
          id: 1,
          name: 'Ivan'
        },
        {
          id: 2,
          name: 'John'
        }
      ]
    },
    posts: [
      { message: "hello", likesCount: 1 },
      { message: "hello232", likesCount: 10 }
    ],
    navs: [
      {
        title: "Messages",
        path: "/messages"
      },
      {
        title: "Profile",
        path: "/profile"
      }
    ]
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_NEW_MESSAGE:
        let newMessage = {
          id: 4,
          text: this._state.dialogs.newMessage
        }
        this._state.dialogs.messages.push(newMessage)
        this._state.dialogs.newMessage = ""
        this._callSubscriber();
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.dialogs.newMessage = action.message;
        this._callSubscriber();
        break;
      case ADD_NEW_POST:
        let newPost = {
          message: this._state.addNewPost,
          likesCount: 0
        };
        this._state.posts.push(newPost);
        this._state.addNewPost = "";
        this._callSubscriber();
        break;

      case UPDATE_NEW_POST_TEXT:
        this._state.addNewPost = action.newText;
        this._callSubscriber();
        break;

      default:
        console.log("kl");
    }
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


export const addPostActionCreator = () => ({ type: ADD_NEW_POST });

export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText
});

export const addNewMessageActionCreator = () => ({
  type: ADD_NEW_MESSAGE,
});
export const updateNewMessageActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  message: message,
});


window.store = store;

export default store;
