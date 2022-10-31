const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
  users: [
    {
      id: 1,
      followed: true,
      name: "Klkj",
      status: "I lj  l lj",
      conutry: "Russia"
    },
    {
      id: 2,
      followed: false,
      name: "Rdfsf",
      status: "E dsfl lj",
      conutry: "USA"
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    default:
      return state;
  }
};

export default usersReducer;
