import React from "react";

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
      {props.postElements}
    </div>
  );
};

export default Posts;
