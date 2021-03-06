import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        errors: Object.values(state.errors),
        loggedIn: state.session.isAuthenticated
    };
};

const mDTP = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        // openModal: (login) => dispatch(openModal('login'))
    }
}

export default connect(mSTP, mDTP)(LoginForm)