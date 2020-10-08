import { connect } from 'react-redux';
import ImageUpload from './image_upload';
import { uploadImage } from '../../actions/image_actions';

//can I pass in a review object here???

const mSTP = state => {
    debugger
    return {
        image: Object.values(state.entities.images)
    }
    // image:
}

const mDTP = dispatch => {
    debugger
    return {
        uploadImage: (file) => dispatch(uploadImage(file))
    }
}

export default connect(mSTP, mDTP)(ImageUpload);
