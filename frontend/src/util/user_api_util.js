import axios from 'axios';


export const fetchAllUsers = () => {
    return axios.get('api/users')
}


export const fetchUser = (user) => {
    return axios.get(`api/users/${user._id}`)
}

export const updateUser = (data) => {
    debugger
    return axios.patch(`/api/users/${data.id}`, data)
}