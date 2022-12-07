const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_PROFILE = "SET_PROFILE";

const initialState = {
   profile: "",
   addNewPost: "Add new post",
   posts: [
      { message: "hello", likesCount: 1 },
      { message: "hello232", likesCount: 10 },
   ],
   navs: [
      {
         title: "Messages",
         path: "/messages",
      },
      {
         title: "Profile",
         path: "/profile",
      },
      {
         title: "Users",
         path: "/users",
      },
   ],
};

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NEW_POST:
         return {
            ...state,
            posts: [
               ...state.posts,
               { message: state.addNewPost, likesCount: 0 },
            ],
            addNewPost: "",
         };

      case UPDATE_NEW_POST:
         return { ...state, addNewPost: action.newText };

      case SET_PROFILE:
         return {
            ...state,
            profile: action.profile,
         };
      default:
         return state;
   }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });

export const updateNewPostTextActionCreator = (newText) => ({
   type: UPDATE_NEW_POST,
   newText: newText,
});

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export default profileReducer;
