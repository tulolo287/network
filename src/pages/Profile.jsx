import React from "react";
import PostsContainer from "../components/Posts/PostsContainer";
import ProfileInfo from "../components/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <PostsContainer />
    </>
  );
};

export default Profile;
