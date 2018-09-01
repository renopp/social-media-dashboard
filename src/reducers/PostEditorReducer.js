import { SET_EDITORPOST_DATA, SET_EDITORBODYPOST, SET_EDITORTITLEPOST } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case SET_EDITORPOST_DATA:
            return action.payload
        case SET_EDITORBODYPOST:
            return { ...state, body: action.payload }
        case SET_EDITORTITLEPOST:
            return { ...state, title: action.payload }
        default:
            return state
    }
}