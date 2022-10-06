import renderApp from "../render";

const store = {
  state: {
    addNewPost: "Add new post",

    posts: [
      { message: "hello", likesCount: 1 },
      { message: "hello232", likesCount: 10 }
    ],
    navs: [
      {
        title: "Messages",
        path: "/messages"
      },
      {
        title: "Profile",
        path: "/profile"
      }
    ]
  }
};

window.store = store;

export const updateNewPostText = (newText) => {
  store.state.addNewPost = newText;
  renderApp(store);
};

export const addPost = (newMessage) => {
  let newPost = {
    message: newMessage,
    likesCount: 0
  };
  store.state.posts.push(newPost);
  renderApp(store);
};
export default store;
