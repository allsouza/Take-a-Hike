import * as ImageApiUtil from '../util/image_api_util';

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const RETRIEVE_IMAGE = 'RETRIEVE_IMAGE';

const receiveImage = file => ({
    type: UPLOAD_IMAGE,
    file
});

const retrieveImage = image => {
    return {
        type: RETRIEVE_IMAGE,
        image
    }
}

//this uploads image to the browser
export const uploadImage = file => dispatch => {
    debugger
    return ImageApiUtil.uploadImage(file)
        .then(file => dispatch(receiveImage(file)))
};

//this fetches the image based on the reviewId
export const fetchImage = reviewId => dispatch => {
    return ImageApiUtil.fetchImage(reviewId)
        .then(image => dispatch(retrieveImage(image)))
}