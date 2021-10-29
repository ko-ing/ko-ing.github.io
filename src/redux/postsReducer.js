const postsReducer = (state = {posts: []}, action) => {
    switch(action.type) {
        case 'SETa':
            return { posts: action.payload.posts }
        default:
            return { posts: [] }
    }
}

export default postsReducer;