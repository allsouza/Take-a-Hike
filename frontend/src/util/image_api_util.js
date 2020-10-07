import axios from 'axios';

export const uploadImage = (data) => {
    return axios.post(`/api/photo/upload`, data).catch(err => {
        console.log(err);
    })
}