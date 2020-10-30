import { connect } from "react-redux";
import { closeModal, openModal } from "../../../actions/modal_actions";
import { updateUser } from "../../../actions/user_actions";
import Search from './search';

const mSTP = state => {
    const users = {};
    if(Object.values(state.entities.users).length > 0) {
        Object.values(state.entities.users).forEach(user => {
            users[`${user.firstName} ${user.lastName}`] = user
        })
    }
    return({
        allUsers: users,
        currentUser: state.entities.users[state.session.user.id]
    })
}

const mDTP = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Search);