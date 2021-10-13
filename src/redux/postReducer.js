const postReducer = (state = {post: ''}, action) => {
    switch(action.type) {
        case 'SET':
            return { post: action.payload.post }
        default:
            return { post: "" }
    }
}