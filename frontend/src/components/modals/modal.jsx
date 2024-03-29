import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import NewList from '../../components/lists/create_list_form_container';
import List from '../../components/lists/edit_list_form_container';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NewReview from '../reviews/create_review_form_container';
import Review from '../reviews/edit_review_form_container';
import TrailIndexItemContainer from '../../components/trails/trail_index_item_container';
import Search from '../../components/dashboard/followers/search_container';
import '../../stylesheets/modal.css'


function Modal({modal, closeModal, info}){
    if(!modal) return '';

    let component;
    switch (modal) {
        case 'newList':
            component=<NewList/>
            break;
        case 'list':
            component=<List info={info}/>
            break;
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'newReview':
            component = <NewReview info={info}/>;
            break;
        case 'review':
            component = <Review info={info} />;
            break;
        case 'trail-item':
            component = <TrailIndexItemContainer trail={info}/>;
            break;
        case 'searchModal':
            component = <Search />;
            break;
        default:
            return null;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <div className={modal} onClick={e=>e.stopPropagation()}>{component}</div>
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
