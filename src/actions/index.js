import axios from 'axios'

import { FETCH_USERS, FETCH_USER, FETCH_POSTS, FETCH_ALBUMS } from './types'

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

export async function fetchPosts(userId, callback) {
    const response = await axios.get(`${ROOT_URL}/posts?userId=${userId}`);
    callback();
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
