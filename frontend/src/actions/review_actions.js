import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_AUTHOR = 'RECEIVE_AUTHOR';

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
};

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

const receiveAuthor = author => {
    return {
        type: RECEIVE_AUTHOR,
        author
    }
}


export const fetchReviews = (trail) => dispatch => {
    ReviewApiUtil.fetchReviews(trail)
        .then(reviews => dispatch(receiveAllReviews(reviews.data)))
};

export const fetchReview = reviewId => dispatch => (
    ReviewApiUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
);

export const fetchAuthor = review => dispatch => {
    
    return ReviewApiUtil.fetchAuthor(review.author)
        .then(author => dispatch(receiveAuthor(author)))
};

export const createReview = review => dispatch => {
    debugger
    return ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review))
        ), err => (
            dispatch(receiveErrors(err.response.data))
        )
};

export const updateReview = review => dispatch => {
    return ReviewApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review))
        ), err => (
            dispatch(receiveErrors(err.response.data))
        )
};

export const deleteReview = reviewId => dispatch => (
    ReviewApiUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId))
        ), err => (
            dispatch(receiveErrors(err.response.data))
        )
);