import axios from 'axios';

export const fetchLists = () => {
    return axios.get('/api/lists')
};

// we may want to keep the route as api/lists???

export const fetchList = listId => {
    return axios.get(`/api/list/${listId}`)
};

export const createList = data => {
    return axios.post('/api/lists/', data)
}

export const updateList = (listId, data) => {
    return axios.patch(`/api/lists/${listId}`, data)
}

export const deleteList = (listId, data) => {
    return axios.delete(`/api/lists/${listId}`, data)
}