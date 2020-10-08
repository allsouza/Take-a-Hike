import { combineReducers } from 'redux';
import ListsReducer from './list_reducer';
import TrailsReducer from './trails_reducer';

const entitiesReducer = combineReducers({
    lists: ListsReducer,
    trails: TrailsReducer
});

export default entitiesReducer;