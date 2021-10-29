import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postsReducer from "./postsReducer"

const rootReducer = combineReducers({
    postReducer,
    postsReducer
})

export default rootReducer;