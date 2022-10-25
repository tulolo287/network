import React from "react";
import Post from "./Post";

const Posts = (props) => {
  debugger;
  let newPostElement = React.createRef();

  const postElements = props.profileReducer.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const addPostHandler = () => {
    props.dispatch({ type: "ADD_NEW_POST" });
  };

  const onPostChange = () => {
    let newText = newPostElement.current.value;
    props.dispatch({ type: "UPDATE_NEW_POST", newText });
  };

  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.profileReducer.addNewPost}
      ></textarea>
      <button onClick={addPostHandler}>Add post</button>
      {postElements}
    </div>
  );
};

export default Posts;
