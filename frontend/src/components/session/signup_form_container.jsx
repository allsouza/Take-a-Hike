import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        auth: state.session.isAuthenticated,
        errors: Object.values(state.errors)
    };
};

const mDTP = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SignupForm);