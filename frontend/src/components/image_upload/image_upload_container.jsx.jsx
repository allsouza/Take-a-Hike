import { connect } from 'react-redux';
import ImageUpload from './image_upload';
import { uploadImage } from '../../actions/image_actions';

const mSTP = state => ({
    
})

const mDTP = dispatch => ({
    uploadImage: () => dispatch(uploadImage())
})

export default connect(null, mDTP)(ImageUpload);