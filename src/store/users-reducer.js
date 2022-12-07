import { userApi } from "../components/api/api.js";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const GO_TO_PAGE = "GO_TO_PAGE";
const SET_LOADING = "SET_LOADING";
const SET_FOLLOW = "SET_FOLLOW";
const SET_FOLLOW_ID = "SET_FOLLOW_ID";
const SET_TOGGLE_FETCHING = "SET_TOGGLE_FETCHING";

let initialState = {
   users: [],
   follow: [],
   loading: false,
   totalUsers: 20,
   pageSize: 5,
   currentPage: 1,
   totalPages: 5,
   isToggleFetching: [],
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
            }),
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.id) {
                  return { ...user, followed: false };
               }
               return user;
            }),
         };
      case SET_USERS:
         return {
            ...state,
            users: [...action.users],
         };
      case SET_TOTAL_PAGES:
         return {
            ...state,
            totalPages: Math.ceil(action.totalUsers / state.pageSize),
         };
      case GO_TO_PAGE:
         return {
            ...state,
            currentPage: action.page,
         };
      case SET_LOADING:
         return {
            ...state,
            loading: action.loading,
         };
      case SET_FOLLOW:
         return {
            ...state,
            follow: action.follow,
         };
      case SET_FOLLOW_ID:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.payload.id) {
                  return { ...u, follow: action.payload.follow };
               }
               return u;
            }),
         };
      case SET_TOGGLE_FETCHING:
         return {
            ...state,
            isToggleFetching: action.isFetching
               ? [...state.isToggleFetching, action.id]
               : state.isToggleFetching.filter((id) => id !== action.id),
         };

      default:
         return state;
   }
};

export const setFollow = (follow) => ({ type: "SET_FOLLOW", follow });

export const setFollowId = (id, follow) => ({
   type: "SET_FOLLOW_ID",
   payload: { id, follow },
});
export const setToggleFetching = (id, isFetching) => ({
   type: "SET_TOGGLE_FETCHING",
   id,
   isFetching,
});

//export const follow = (id) => ({ type: "FOLLOW", id })

//export const unfollow = (id) => ({ type: "UNFOLLOW", id });
export const getUsersThunk = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(setLoading(true));
      dispatch(setTotalPages(20));
      dispatch(setCurrentPage(currentPage));

      userApi.getUsers(currentPage, pageSize).then((data) => {
         dispatch(setUsers(data));
         dispatch(setLoading(false));
      });
   };
};

export const setFollowThunk = (id, follow) => {
   return (dispatch) => {
      dispatch(setToggleFetching(id, true));
      userApi.followToggle(id, follow).then((data) => {
         dispatch(setToggleFetching(id, false));
         dispatch(setFollowId(id, follow));
      });
   };
};

export const setUsers = (users) => ({ type: "SET_USERS", users });

export const setTotalPages = (totalUsers) => ({
   type: "SET_TOTAL_PAGES",
   totalUsers,
});

export const setCurrentPage = (page) => ({ type: "GO_TO_PAGE", page });

export const setLoading = (loading) => ({ type: "SET_LOADING", loading });

export default usersReducer;
