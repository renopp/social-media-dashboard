import axios from 'axios'

import { FETCH_USERS, FETCH_USER, FETCH_POSTS, FETCH_ALBUMS, ADD_POST, UPDATE_POST } from './types'

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

export async function updatePost(userId, id, title, body, callback) {
    const params = { title, body, userId, id }
    const response = await axios.put(`${ROOT_URL}/posts/${id}`, params)
    callback()
    return {
        type: UPDATE_POST,
        payload: response
    }
}