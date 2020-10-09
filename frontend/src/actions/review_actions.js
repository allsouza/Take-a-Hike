import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = review => {
    debugger
    return {
        type: RECEIVE_REVIEW,
        review
    }
};

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});


export const fetchReviews = (trail) => dispatch => {
    debugger
    console.log(trail._id);
    ReviewApiUtil.fetchReviews(trail)
        .then(reviews => dispatch(receiveAllReviews(reviews.data)))
};

export const fetchReview = reviewId => dispatch => (
    ReviewApiUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => {
    debugger
    return ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
};

export const updateReview = review => dispatch => {
    debugger
    return ReviewApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
};

export const deleteReview = reviewId => dispatch => (
    ReviewApiUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
);