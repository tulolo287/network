import React from "react";
import Posts from "../components/Posts";
import ProfileInfo from "../components/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <Posts posts={props.posts} dispatch={props.dispatch} />
    </>
  );
};

export default Profile;
