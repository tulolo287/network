import React from "react";
import Post from "./Post";

const Posts = (props) => {
  let newPostElement = React.createRef();

  const onPostChange = () => {
    let newText = newPostElement.current.value;
    props.onPostChange(newText);
  };
  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.addNewPost}
      ></textarea>
      <button onClick={props.addPostHandler}>Add post</button>

      {props.posts.map((post) => (
        <Post message={post.message} likesCount={post.likesCount} />
      ))}
    </div>
  );
};

export default Posts;
