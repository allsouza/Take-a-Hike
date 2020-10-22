import { combineReducers } from 'redux';
import ListsReducer from './list_reducer';
import ReviewsReducer from './review_reducer';
import ImagesReducer from './images_reducer';
import TrailsReducer from './trails_reducer';
import UsersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    lists: ListsReducer,
    reviews: ReviewsReducer,
    images: ImagesReducer,
    trails: TrailsReducer,
    users: UsersReducer
});

export default entitiesReducer;