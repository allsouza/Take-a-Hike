import axios from 'axios';

export const uploadImage = (review, image) => {
    
    return axios.post(`/api/photo/upload/${review._id}`, image).catch(err => {
    })
}

// must take in a review object and then interpolate the id.  Route should be 'api/photo/:route_id'

export const fetchImage = (reviewId) => {
    
    return axios.get(`api/photo/${reviewId}`).catch(err => {
    })
}