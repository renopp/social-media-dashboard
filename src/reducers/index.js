import { combineReducers } from 'redux'

import UsersReducer from './UsersReducer'
import UserReducer from './UserReducer'
import PostsReducer from './PostsReducer'
import AlbumsReducer from './AlbumsReducer'
import PostEditorReducer from './PostEditorReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    users: UsersReducer,
    posts: PostsReducer,
    albums: AlbumsReducer,
    editorPostData: PostEditorReducer
})

export default rootReducer;