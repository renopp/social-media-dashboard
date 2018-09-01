import axios from 'axios'

import { FETCH_USERS } from './types'

const ROOT_URL = 'https://be-smd.herokuapp.com'

export function fetchUsers() {
    const response = axios.get(`${ROOT_URL}/users`)
    return {
        type: FETCH_USERS,
        payload: response
    }
}
