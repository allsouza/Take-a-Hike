import { combineReducers } from 'redux';
import ListsReducer from './list_reducer';
import ReviewsReducer from './review_reducer';
import ImagesReducer from './images_reducers';

const entitiesReducer = combineReducers({
    lists: ListsReducer,
    reviews: ReviewsReducer,
    images: ImagesReducer
});

export default entitiesReducer;