import axios from 'axios';


// we may want to keep the route as api/lists???

export const fetchReviews = (trail) => {
    return axios.get(`/api/trails/${trail.id}/reviews`)
};

export const fetchReview = (review) => {
    return axios.get(`/api/trails/${review.trailId}/reviews/${review.id}`)
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