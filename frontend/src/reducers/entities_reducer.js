import { combineReducers } from 'redux';
import ListsReducer from './list_reducer';
import ImagesReducer from './images_reducers';

const entitiesReducer = combineReducers({
    lists: ListsReducer,
    images: ImagesReducer
});

export default entitiesReducer;