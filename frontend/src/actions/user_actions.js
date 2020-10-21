import * as UserApiUtil from '../util/user_api_util';


export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';


const receiveAllUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user

    }
}

// users or users.data

export const fetchAllUsers = () => dispatch => {
    return UserApiUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users.data)))
}

export const fetchUser = (userId) => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

export const updateUser = (userId) => dispatch => {
    return UserApiUtil.updateUser(userId)
        .then(user => dispatch(receiveUser(user)))
}