import { connect } from "react-redux";
import Users from "./index.jsx";

const mapToState = (state) => {
  return {
    users: state.usersReducer.users
  };
};

const mapToDispatch = (dispatch) => {
  return {
    followToggle: (isFollow, id) => {
      isFollow
        ? dispatch({ type: "FOLLOW", id })
        : dispatch({ type: "UNFOLLOW", id });
    },
    setUsers: (users) => {
      dispatch({ type: "SET_USERS", users });
    }
  };
};

const UsersContainer = connect(mapToState, mapToDispatch)(Users);
export default UsersContainer;
