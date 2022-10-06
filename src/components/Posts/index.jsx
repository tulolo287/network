import React from "react";
import Post from "./Post";
import addNewPost from "../../store";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../store";

const Posts = (props) => {
  let newPostElement = React.createRef();

  const postElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const addPostHandler = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let newText = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(newText));

  };

  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={addNewPost.getState().addNewPost}
      ></textarea>
      <button onClick={addPostHandler}>Add post</button>
      {postElements}
    </div>
  );
};

export default Posts;
