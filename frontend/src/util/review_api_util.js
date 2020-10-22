import axios from 'axios';

// will need to take in a trail object and interpolate trail._id
//test with no reviews => 5f7f90a1d9ca64186d137aa5
//test with reviews => 5f7e0e930cdb287979bc8eb4

export const fetchReviews = (trail) => {
    return axios.get(`/api/reviews/trails/${trail._id}`)
};

export const fetchAuthor = (authorId) => {
    return axios.get(`/api/users/${authorId}`)
}

export const fetchReview = (review) => {
    return axios.get(`/api/trails/${review.trailId}/reviews/${review._id}`)
};

export const createReview = data => {
    
    return axios.post('/api/reviews/', data)
}

//creating a review is working now, but fetching a review is not.

export const updateReview = (data) => {
    
    return axios.patch(`/api/reviews/${data._id}`, data)
}

export const deleteReview = (reviewId) => {
    
    return axios.delete(`/api/reviews/${reviewId}`)
}

