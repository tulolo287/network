import StoreContext from "../../StoreContext";
import Posts from "./index";
import Post from "./Post";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const postElements = props.profileReducer.posts.map((post) => (
          <Post message={post.message} likesCount={post.likesCount} />
        ));

        const addPostHandler = () => {
          props.dispatch({ type: "ADD_NEW_POST" });
        };

        const onPostChange = (newText) => {
          props.dispatch({ type: "UPDATE_NEW_POST", newText });
        };

        return (
          <Posts
            addNewPost={state.profileReducer.addNewPost}
            postElements={postElements}
            addPostHandler={addPostHandler}
            onPostChange={onPostChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
