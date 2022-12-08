import React from "react";
import { connect } from "react-redux";
import Header from "./index.jsx";
import { setLogout } from "../../store/auth-reducer";

class HeaderContainer extends React.Component {
   render = () => {
      return <Header {...this.props} />;
   };
}

const mapToState = (state) => {
   return {
      user: state.authReducer.user,
   };
};

export default connect(mapToState, { setLogout })(HeaderContainer);
