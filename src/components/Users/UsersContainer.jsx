import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Users from "./index.jsx";

class UsersApi extends React.Component {

  componentDidMount() {
    //https://dummyjson.com/users
    //https://jsonplaceholder.typicode.com/users
    this.props.setLoading(true);
    axios
      .get(`https://dummyjson.com/users?skip=${this.props.currentPage * this.props.pageSize}&limit=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.users);
        console.log(response)
        this.props.setTotalPages(response.data.total)
        this.props.setLoading(false)
      });



  }

  onPageChanged = (page) => {
    this.props.setLoading(true)
    this.props.goToPage(page)
    axios
      .get(`https://dummyjson.com/users?skip=${page * this.props.pageSize}&limit=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.users);
        this.props.setLoading(false);
      });
  }
  render() {

    return <Users
      loading={this.props.loading}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      currentPage={this.props.currentPage}
      totalPages={this.props.totalPages}
      followToggle={this.props.followToggle}
      goToPage={this.props.goToPage}
    />;
  }
}

const mapToState = (state) => {
  return {
    loading: state.usersReducer.loading,
    users: state.usersReducer.users,
    totalPages: state.usersReducer.totalPages,
    currentPage: state.usersReducer.currentPage,
    pageSize: state.usersReducer.pageSize
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
    setTotalPages: (totalUsers) => {
      dispatch({ type: "SET_TOTAL_PAGES", totalUsers });
    },
    goToPage: (page) => {
      dispatch({ type: "GO_TO_PAGE", page });
    },
    setLoading: (loading) => {
      dispatch({ type: "SET_LOADING", loading });
    }
  }
};

const UsersContainer = connect(mapToState, mapToDispatch)(UsersApi);
export default UsersContainer;
