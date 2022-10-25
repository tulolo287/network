const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

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
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        message: state.addNewPost,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.addNewPost = "";
      return state;

    case UPDATE_NEW_POST:
      state.addNewPost = action.newText;

      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });

export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST,
  newText: newText
});

export default profileReducer;
