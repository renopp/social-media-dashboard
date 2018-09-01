import { combineReducers } from 'redux'

import UsersReducer from './UsersReducer'
import UserReducer from './UserReducer'
import PostsReducer from './PostsReducer'
import AlbumsReducer from './AlbumsReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    users: UsersReducer,
    posts: PostsReducer,
    albums: AlbumsReducer
})

export default rootReducer;