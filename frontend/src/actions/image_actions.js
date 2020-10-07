import * as ImageApiUtil from '../util/image_api_util';

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';


const receiveImage = image => ({
    type: UPLOAD_IMAGE,
    image
});


export const uploadImage = image => dispatch => (
    ImageApiUtil.uploadImage(image)
        .then(image => dispatch(receiveImage(image)))
);