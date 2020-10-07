import axios from 'axios';


export const fetchReviews = (trail) => {
    return axios.get(`/api/trails/${trail._id}/reviews`)
};

// fetchReview may be problematic...is it possible to take in a review object or does it need to be a reviewID

export const fetchReview = (review) => {
    return axios.get(`/api/trails/${review.trailId}/reviews/${review._id}`)
};

export const createReview = data => {
    return axios.post('/api/reviews/', data)
}

export const updateReview = (data) => {
    return axios.patch(`/api/reviews/${data._id}`, data)
}

export const deleteReview = (reviewId) => {
    return axios.delete(`/api/reviews/${reviewId}`)
}

