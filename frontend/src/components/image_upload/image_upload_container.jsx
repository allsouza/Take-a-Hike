import { connect } from 'react-redux';
import ImageUpload from './image_upload';
import { uploadImage } from '../../actions/image_actions';

const mSTP = state => {
    debugger
    return {
        image: state.entities.images.id
    }
    // image:
}

const mDTP = dispatch => ({
    uploadImage: (file) => dispatch(uploadImage(file))
})

export default connect(mSTP, mDTP)(ImageUpload);
