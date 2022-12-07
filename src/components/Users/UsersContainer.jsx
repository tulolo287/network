import React from "react";
import { connect } from "react-redux";
import {
   setFollow,
   setToggleFetching,
   setCurrentPage,
   setFollowId,
   getUsersThunk,
   setFollowThunk,
} from "../../store/users-reducer.js";
import Users from "./index.jsx";

class UsersApi extends React.Component {
   componentDidMount() {
      this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (page) => {
      this.props.getUsersThunk(page, this.props.pageSize);
   };

   render() {
      return (
         <Users
            loading={this.props.loading}
            users={this.props.users}
            currentPage={this.props.currentPage}
            totalPages={this.props.totalPages}
            setLoading={this.props.setLoading}
            follow={this.props.follow}
            setFollowId={this.props.setFollowId}
            setCurrentPage={this.props.setCurrentPage}
            onPageChanged={this.onPageChanged}
            isToggleFetching={this.props.isToggleFetching}
            setFollowThunk={this.props.setFollowThunk}
         />
      );
   }
}

const mapToState = (state) => {
   return {
      loading: state.usersReducer.loading,
      users: state.usersReducer.users,
      totalPages: state.usersReducer.totalPages,
      currentPage: state.usersReducer.currentPage,
      pageSize: state.usersReducer.pageSize,
      follow: state.usersReducer.follow,
      isToggleFetching: state.usersReducer.isToggleFetching,
   };
};

const UsersContainer = connect(mapToState, {
   setFollow,
   setToggleFetching,
   setFollowId,
   setCurrentPage,
   getUsersThunk,
   setFollowThunk,
})(UsersApi);
export default UsersContainer;
