import modalReducer from './modal_reducer';
const { combineReducers } = require("redux");

const uiReducer = combineReducers({
    modal: modalReducer
})

export default uiReducer;