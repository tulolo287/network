import React from "react";
import Register from "./Register";
import { userApi } from "../api/api";
import { connect } from "react-redux";
import { setUserData } from "../../store/auth-reducer";
import { useNavigate } from "react-router-dom";

class RegisterContainer extends React.Component {
   register = (email, password) => {
      userApi.register(email, password, this.props);

      this.props.history.push('/profile')
   };
   render() {
      return <Register isAuth={this.props.isAuth} register={this.register} />;
   }
}

const mapToState = (state) => {
   return {
      isAuth: state.authReducer.isAuth,
   };
};

export default connect(mapToState, { setUserData })(RegisterContainer);
