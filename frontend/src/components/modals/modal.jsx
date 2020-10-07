import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import NewList from '../../components/lists/create_list_form_container';
<<<<<<< HEAD
=======
import List from '../../components/lists/edit_list_form_container';
>>>>>>> master
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import '../../stylesheets/modal.css'


function Modal({modal, closeModal, info}){

    if(!modal) return null;

    let component;
    switch (modal) {
        case 'newList':
            component=<NewList/>
            break;
<<<<<<< HEAD
=======
        case 'list':
            component=<List info={info}/>
            break;
>>>>>>> master
        case 'login':
            component = <LoginFormContainer />;
      break;
    case 'signup':
            component = <SignupFormContainer />;
      break;
        default:
            return null;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e=>e.stopPropagation()}>{component}</div>
        </div>
    )
}

const mSTP = state => {
    if (state.ui.modal !== null){
        return({
            modal: state.ui.modal.type,
            info: state.ui.modal.info
        })
    }
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(Modal))