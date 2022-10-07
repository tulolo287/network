const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
  addNewPost: "Add new post",
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
};

export const profileReducer = (state = initialState, action) => {
  switch (action.tye) {
    case ADD_NEW_POST:
      let newPost = {
        message: this._state.addNewPost,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.addNewPost = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.addNewPost = action.newText;
      this._callSubscriber();
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });

export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText
});

export default profileReducer;
