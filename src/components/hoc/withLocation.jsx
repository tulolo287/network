import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import {
   useLocation,
   useNavigate,
   useParams,
   Navigate,
} from "react-router-dom";
import { compose } from "redux";
import { useEffect } from "react";

const mapToState = (state) => {
   return {
      user: state.authReducer.user.isAuth,
   };
};

export const withAuthRedirect = (Component) => {
   class withLocation extends React.Component {
      componentDidMount() {}
      render() {
         if (!this.props.user.isAuth) {
            return <Navigate to="/login" />;
         } else {
            return <Component {...this.props} />;
         }
      }
   }
   return connect(mapToState)(withLocation);
};
