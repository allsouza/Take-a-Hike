import { UPLOAD_IMAGE, RETRIEVE_IMAGE } from '../actions/image_actions';



const ImagesReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case UPLOAD_IMAGE:
            // 
            newState['id'] = action.file.data.data;
            return newState;
        case RETRIEVE_IMAGE:
            // 
            newState[action.image.data._id] = action.image.data
        default:
            return state;
    }
}

export default ImagesReducer;