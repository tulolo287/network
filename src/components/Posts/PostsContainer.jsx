import React from "react";
import { connect } from "react-redux";
import Posts from "./index";

const mapToState = (state) => {
  return {
    addNewPost: state.profileReducer.addNewPost,
    posts: state.profileReducer.posts
  };
};

const mapToDispatch = (dispatch) => {
  return {
    addPostHandler: () => {
      dispatch({ type: "ADD_NEW_POST" });
    },
    onPostChange: (newText) => {
      dispatch({ type: "UPDATE_NEW_POST", newText });
    }
  };
};
const PostsContainer = connect(mapToState, mapToDispatch)(Posts);

export default PostsContainer;
