const store = {
  _state: {
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
  },
  dispatch(action) {
    switch (action.type) {
      case "ADD-POST":
        let newPost = {
          message: this._state.addNewPost,
          likesCount: 0
        };
        this._state.posts.push(newPost);
        this._state.addNewPost = "";
        this._callSubscriber();
        break;

      case "UPDATE-POST":
        this._state.addNewPost = action.newText;
        this._callSubscriber();
        break;

      default:
        console.log("kl");
    }
  },
  _callSubscriber() {
    console.log("subscriber");
  },
  getState() {
    return this._state;
  },
  updateNewPostText(newText) {},
  addPost() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

window.store = store;

export default store;
