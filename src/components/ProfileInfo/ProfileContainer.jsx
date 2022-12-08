import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileInfo from "./index.jsx";
import { setProfile } from "../../store/profile-reducer";

import {
   useLocation,
   useNavigate,
   useParams,
   redirect,
   Navigate,
} from "react-router-dom";
import { profileApi } from "../api/api.js";
import { withAuthRedirect } from "../hoc/withLocation.jsx";
import { compose } from "redux";

const withRouter = (Component) => {
   return (props) => {
      const navigate = useNavigate();
      const params = useParams();
      const location = useLocation();
      return (
         <Component
            {...props}
            navigate={navigate}
            params={params}
            location={location}
         />
      );
   };
};

class ProfileContainer extends React.Component {
   componentDidMount() {
      profileApi.getProfile(this.props.params.id, this.props);
   }
   render() {
      return <ProfileInfo {...this.props} />;
   }
}

const mapToState = (state, ownProps) => {
   console.log(ownProps);
   return {
      profile: state.profileReducer.profile,
      user: state.authReducer.user,
   };
};

let withRedirect = (props) => {
   if (!props.user.isAuth) return <Navigate to="/login" />;
   return <ProfileContainer {...props} />;
};

const bls = withRouter(withRedirect);

export default connect(mapToState, { setProfile })(bls);
