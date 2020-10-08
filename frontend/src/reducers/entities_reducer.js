import { combineReducers } from 'redux';
import ListsReducer from './list_reducer';

const entitiesReducer = combineReducers({
    lists: ListsReducer
});

export default entitiesReducer;