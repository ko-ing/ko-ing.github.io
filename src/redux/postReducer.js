const defaultPost = {
    title: "",
    text: ""
}

const postReducer = (state = defaultPost, action) => {
    switch(action.type) {
        case 'SET':
            return { post: action.payload.post }
        default:
            return { post: defaultPost }
    }
}

export default postReducer;