import axios from 'axios'

import {
    FETCH_USERS, FETCH_USER, FETCH_POSTS,
    FETCH_ALBUMS, ADD_POST, UPDATE_POST,
    DELETE_POST, SET_EDITORBODYPOST, SET_EDITORTITLEPOST, SET_EDITORPOST_DATA
} from './types'

const ROOT_URL = 'https://be-smd.herokuapp.com'

export async function fetchUser(userId, callback) {
    const response = await axios.get(`${ROOT_URL}/users/${userId}`)
    callback()
    return {
        type: FETCH_USER,
        payload: response
    }
}

export async function fetchUsers(callback) {
    const response = await axios.get(`${ROOT_URL}/users`);
    callback();
    return {
        type: FETCH_USERS,
        payload: response
    }
}

export async function fetchPosts(userId) {
    const response = await axios.get(`${ROOT_URL}/posts?userId=${userId}`);
    return {
        type: FETCH_POSTS,
        payload: response
    }
}

export async function fetchAlbums(userId, callback) {
    const response = await axios.get(`${ROOT_URL}/albums?userId=${userId}`);
    callback();
    return {
        type: FETCH_ALBUMS,
        payload: response
    }
}

export async function addPost(userId, title, body) {
    const params = { title, body, userId }
    const response = await axios.post(`${ROOT_URL}/posts`, params)
    return {
        type: ADD_POST,
        payload: response
    }
}

export async function updatePost(userId, id, title, body) {
    const params = { title, body, userId, id }
    const response = await axios.put(`${ROOT_URL}/posts/${id}`, params)
    return {
        type: UPDATE_POST,
        payload: response
    }
}

export async function deletePost(postid) {
    await axios.delete(`${ROOT_URL}/posts/${postid}`)
    return {
        type: DELETE_POST,
        payload: postid
    }
}

export function setEditorPostData(post) {
    return {
        type: SET_EDITORPOST_DATA,
        payload: post
    }
}

export function setEditorTitlePost(title){
    return {
        type: SET_EDITORTITLEPOST,
        payload: title
    }
}

export function setEditorBodyPost(body){
    return {
        type: SET_EDITORBODYPOST,
        payload: body
    }
}
