import modalReducer from './modal_reducer';
import filterReducer from './filter_reducer';
const { combineReducers } = require("redux");

const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filterReducer
})

export default uiReducer;