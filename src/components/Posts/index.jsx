import React from "react";
import Post from "./Post";
import { addPost, updateNewPostText } from "../../store";

const Posts = (props) => {
  let newPostElement = React.createRef();

  const postElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const addPostHandler = () => {
    let text = newPostElement.current.value;
    addPost(text);
    console.log(props.addNewPost);
    updateNewPostText("");
  };

  const onPostChange = () => {
    let newText = newPostElement.current.value;
    updateNewPostText(newText);
  };

  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.addNewPost}
      ></textarea>
      <button onClick={addPostHandler}>Add post</button>
      {postElements}
    </div>
  );
};

export default Posts;
