import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import RichTextEditor from './editor';

const mSTP = (state, ownProps) => ({
    list: ownProps.list,
    save: ownProps.save
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(RichTextEditor)