const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const GO_TO_PAGE = "GO_TO_PAGE";
const SET_LOADING = "SET_LOADING";

let initialState = { users: [], loading: false, totalUsers: 100, pageSize: 10, currentPage: 1, totalPages: 5 };

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
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: Math.ceil(action.totalUsers / state.pageSize)
      }
    case GO_TO_PAGE:
      return {
        ...state, currentPage: action.page}
    case SET_LOADING:
      return {
        ...state, loading: action.loading
      }
    
    default:

      return state;
  }
};

export const follow = (id) => ({ type: "FOLLOW", id })

export const unfollow = (id) => ({ type: "UNFOLLOW", id });

export const setUsers = (users) => ({ type: "SET_USERS", users });

export const setTotalPages = (totalUsers) => ({ type: "SET_TOTAL_PAGES", totalUsers });

export const goToPage = (page) => ({ type: "GO_TO_PAGE", page });

export const setLoading = (loading) => ({ type: "SET_LOADING", loading });

export default usersReducer;
