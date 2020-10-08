import * as ImageApiUtil from '../util/image_api_util';

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';


const receiveImage = file => ({
    type: UPLOAD_IMAGE,
    file
});


export const uploadImage = file => dispatch => {
    debugger
    return ImageApiUtil.uploadImage(file)
        .then(file => dispatch(receiveImage(file)))
};
