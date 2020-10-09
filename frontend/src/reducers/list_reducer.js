import { RECEIVE_ALL_LISTS, RECEIVE_LIST, REMOVE_LIST } from '../actions/list_actions';

const ListsReducer = ( state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    
    switch(action.type) {
        case RECEIVE_ALL_LISTS:
            
            action.lists.forEach( list => newState[list._id] = list)
            return newState;
        case RECEIVE_LIST:
            
            newState[action.list.data._id] = action.list.data;
            return newState;
        case REMOVE_LIST:
            delete newState[action.listId];
            return newState;
        default:
            return state;
    }
}

export default ListsReducer;