import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            action.reviews.forEach( review => newState[review._id] = review)
            return newState;
        case RECEIVE_REVIEW:
            debugger
            newState[action.review.data._id] = action.review.data;
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default ReviewsReducer;