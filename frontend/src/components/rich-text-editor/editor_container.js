import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import RichTextEditor from './editor';

const mSTP = (state, ownProps) => {
    return({
        data: ownProps.list,
        save: ownProps.save,
        editor: 'list',
        currentUser: state.session.user
})}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(RichTextEditor)