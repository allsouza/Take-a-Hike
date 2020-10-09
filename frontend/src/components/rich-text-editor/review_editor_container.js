import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import RichTextEditor from './editor';

const mSTP = (state, ownProps) => {
    debugger
    return{
        data: ownProps.review,
        save: ownProps.save,
        editor: 'review'
    }
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(RichTextEditor)