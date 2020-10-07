import { UPLOAD_IMAGE } from '../actions/image_actions';



const ImagesReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case UPLOAD_IMAGE:
            debugger
            newState[action.listId] = action.list;
            return newState;
        default:
            return state;
    }
}

export default ImagesReducer;