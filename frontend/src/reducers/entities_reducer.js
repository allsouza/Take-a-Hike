import { combineReducers } from 'redux';
import ListsReducer from './list_reducer';
import ReviewsReducer from './review_reducer'

const entitiesReducer = combineReducers({
    lists: ListsReducer,
    reviews: ReviewsReducer
});

export default entitiesReducer;