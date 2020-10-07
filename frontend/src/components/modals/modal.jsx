import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import NewList from '../../components/lists/create_list_form_container';
import List from '../../components/lists/edit_list_form_container';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import '../../stylesheets/modal.css'


function Modal({modal, closeModal, info}){
  let klass
    if(!modal) return null;

    let component;
    switch (modal) {
        case 'newList':
            component=<NewList />
            klass = 'modal-list';
            break;
        case 'list':
            component=<List info={info} />
            klass = 'modal-list';
            break;
        case 'login':
            component = <LoginFormContainer />;
           klass = 'modal-child';
      break;
    case 'signup':
            component = <SignupFormContainer />;
             klass = 'modal-child';
      break;
        default:
            return null;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <div onClick={e=>e.stopPropagation()} className={klass}>{component}</div>
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