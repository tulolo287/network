const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGOUT = "SET_LOGOUT";

const initialState = {
   user: {
      email: null,
      userId: null,
      login: null,
      accessToken: null,
      isAuth: false,
   },
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            user: {
               email: action.data.user.email,
               userId: action.data.user.id,
               accessToken: action.data.accessToken,
               isAuth: true,
            },
         };
      case SET_LOGOUT:
         localStorage.setItem("user", null);
         return {
            ...state,
            user: {
               email: null,
               userId: null,
               login: null,
               accessToken: null,
               isAuth: false,
            },
         };

      default:
         return state;
   }
};
export const setLogout = () => ({ type: "SET_LOGOUT" });

export const setUserData = (data) => {
   return { type: "SET_USER_DATA", data };
};

export default authReducer;
