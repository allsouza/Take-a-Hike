import { RECEIVE_ALL_TRAILS, RECEIVE_TRAIL } from '../actions/trails_actions';


const TrailsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_TRAILS:
            action.trails.forEach(trail => newState[trail._id] = trail )
            return newState;
        case RECEIVE_TRAIL:
            newState[action.trail.data._id] = action.trail.data;
            return newState;
        default:
            return state;
    }
}

export default TrailsReducer;