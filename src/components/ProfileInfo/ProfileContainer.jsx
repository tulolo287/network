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

const withLocation = (Component) => (props) => {
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

class ProfileContainer extends React.Component {
   componentDidMount() {
      profileApi.getProfile(this.props.params.id, this.props);
   }
   render() {
      //return this.props.redirect("/login");
      return <ProfileInfo {...this.props} />;
   }
}

const mapToState = (state) => {
   return {
      profile: state.profileReducer.profile,
   };
};

const ProfileContainerWithLocation = withLocation(ProfileContainer);
const ProfileContainerWithLocation2 = withAuthRedirect(
   ProfileContainerWithLocation
);

export default connect(mapToState, { setProfile })(
   ProfileContainerWithLocation2
);
