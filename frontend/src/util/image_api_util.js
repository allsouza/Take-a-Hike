import axios from 'axios';

export const uploadImage = (review) => {
    debugger
    return axios.post(`/api/photo/upload/${review._id}`, review).catch(err => {
        console.log(err);
    })
}

// must take in a review object and then interpolate the id.  Route should be 'api/photo/:route_id'

export const fetchImage = (reviewId) => {
    debugger
    return axios.get(`api/photo/${reviewId}`).catch(err => {
        console.log(err);
    })
}