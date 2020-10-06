import axios from 'axios';

export const fetchReviews = () => {
    return axios.get('/api/lists')
};

// we may want to keep the route as api/lists???

export const fetchReview = reviewId => {
    return axios.get(`/api/reviews/${reviewId}`)
};

export const createReview = data => {
    return axios.post('/api/reviews/', data)
}

export const updateReview = (reviewId, data) => {
    return axios.patch(`/api/reviews/${reviewId}`, data)
}

export const deleteReview = (reviewId, data) => {
    return axios.delete(`/api/reviews/${reviewId}`, data)
}