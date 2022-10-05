const store = {
    state: {
        posts: [
            {message: 'hello', likesCount: 1},
            {message: 'hello232', likesCount: 10},
        ],
        navs: [
            {
                title: 'Messages',
                path: '/messages'
            },
            {
                title: 'Profile',
                path: '/profile'
            }
        ]
    },
    
}
    
export const addPost = (newMessage) => {
    let newPost = 
       { 
        message: newMessage,
        likesCount: 0

    }
    store.state.posts.push(newPost);
    
}
export default store
