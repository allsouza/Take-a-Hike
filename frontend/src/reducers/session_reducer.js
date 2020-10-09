import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN, CLEAR_ERRORS } from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        case RECEIVE_CURRENT_USER:
            return {
                isAuthenticated: true,
                user: action.currentUser
            }
        case RECEIVE_USER_SIGN_IN: 
            return {
                isAuthenticated: true,
                user: action.currentUser
            }
        case CLEAR_ERRORS:
                return [];
        default:
            return state;
    }
}