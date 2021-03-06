import { RECEIVE_USER, RECEIVE_ALL_USERS } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            action.users.forEach(user => {newState[user.id] = user})
            return newState;
        case RECEIVE_USER:
            
            newState[action.user.data.id] = action.user.data;
            return newState;
        default:
            return state;
    }
}

export default UsersReducer;