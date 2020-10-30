import { connect } from "react-redux";
import { openModal } from "../../../actions/modal_actions";
import FollowerIndex from './follower_index';
const { updateUser } = require("../../../actions/user_actions")

const mSTP = (state, ownProps) => {
    return({
    user: ownProps.user,
    allUsers: state.entities.users
})}

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    openModal: type => dispatch(openModal(type))
})

export default connect(mSTP, mDTP)(FollowerIndex);