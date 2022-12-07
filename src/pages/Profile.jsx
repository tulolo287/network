import React from "react";
import PostsContainer from "../components/Posts/PostsContainer";
import ProfileInfo from "../components/ProfileInfo";
import ProfileContainer from "../components/ProfileInfo/ProfileContainer";

const Profile = (props) => {
  return (
    <>
      <ProfileContainer />
      <PostsContainer />
    </>
  );
};

export default Profile;
