import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_ERRORS, RECEIVE_AUTHOR } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            
            newState = Array.from(action.reviews)
            //action.reviews.forEach( review => newState[review._id] = review)
            return newState;
        case RECEIVE_REVIEW:
            newState[action.review.data._id] = action.review.data
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        case RECEIVE_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_AUTHOR:
            return action.author;
        default:
            return state;
    }
}

export default ReviewsReducer;