import { ADD_ARTICLE } from "../Constants/Actions-Type"

export const addPost = (newPost) => {
    return {
        type: ADD_ARTICLE,
        payload: newPost
    }
}