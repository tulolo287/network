import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Users from "./index.jsx";

class UsersApi extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.props.setUsers(response.data);
          console.log(response)
          //this.props.getTotalPagesCount(response)
        });
    }
  }
  render() {
    return <Users users={this.props.users} />;
  }
}

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
    },
    getTotalPagesCount: () => {
      dispatch({ type: "GET_TOTAL_PAGES_COUNT" });
    }
  };
};

const UsersContainer = connect(mapToState, mapToDispatch)(UsersApi);
export default UsersContainer;
