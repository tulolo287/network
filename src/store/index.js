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
    }
}
    
export default store
