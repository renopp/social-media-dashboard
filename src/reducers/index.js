import { combineReducers } from 'redux'

import UsersReducer from './UsersReducer'
import UserReducer from './UserReducer'
import PostsReducer from './PostsReducer'
import AlbumsReducer from './AlbumsReducer'
import PostReducer from './PostReducer'
import CommentsReducer from './CommentsReducer'
import CommentReducer from './CommentReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    users: UsersReducer,
    posts: PostsReducer,
    albums: AlbumsReducer,
    post: PostReducer,
    comments: CommentsReducer,
    comment: CommentReducer
})

export default rootReducer;