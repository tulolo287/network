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
  let stateСopy = { ...state };
  stateСopy.posts = [...state.posts];
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        message: stateСopy.addNewPost,
        likesCount: 0
      };

      stateСopy.posts.push(newPost);
      stateСopy.addNewPost = "";
      return stateСopy;

    case UPDATE_NEW_POST:
      stateСopy.addNewPost = action.newText;

      return stateСopy;
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
