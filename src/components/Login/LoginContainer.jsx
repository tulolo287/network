import React, { Component } from "react";
import Login from "./index.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../store/auth-reducer.js";
import { userApi } from "../api/api.js";
import PropTypes from "prop-types";

class LoginContainer extends Component {
   static contextType = {
      router: PropTypes.object,
   };

   login = (email, password) => {
      userApi.login(email, password, (data) => {
         this.props.setUserData(data);
         localStorage.setItem("user", JSON.stringify(data));
         window.location.replace(`/profile/${data.user.id}`);
      });
   };
   render() {
      return <Login login={this.login} />;
   }
}

const mapToState = (state) => {
   return {
      userId: state.authReducer.userId,
   };
};

export default connect(mapToState, { setUserData })(LoginContainer);
