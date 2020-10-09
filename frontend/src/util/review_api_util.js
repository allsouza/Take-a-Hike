import axios from 'axios';

// will need to take in a trail object and interpolate trail._id

export const fetchReviews = () => {
    debugger
    return axios.get(`/api/reviews/trails/5f7e0e930cdb287979bc8eb4`)
};

//

// fetchReview may be problematic...is it possible to take in a review object or does it need to be a reviewID

export const fetchReview = (review) => {
    return axios.get(`/api/trails/${review.trailId}/reviews/${review._id}`)
};

export const createReview = data => {
    debugger
    return axios.post('/api/reviews/', data)
}

//creating a review is working now, but fetching a review is not.

export const updateReview = (data) => {
    debugger
    return axios.patch(`/api/reviews/${data._id}`, data)
}

export const deleteReview = (reviewId) => {
    debugger
    return axios.delete(`/api/reviews/${reviewId}`)
}

