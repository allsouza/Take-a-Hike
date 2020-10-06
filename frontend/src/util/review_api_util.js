import axios from 'axios';


export const fetchReviews = (trail) => {
    return axios.get(`/api/trails/${trail.id}/reviews`)
};

// fetchReview may be problematic...is it possible to take in a review object or does it need to be a reviewID

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