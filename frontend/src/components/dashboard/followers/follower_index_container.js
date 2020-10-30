import { connect } from "react-redux";
import FollowerIndex from './follower_index';
const { updateUser } = require("../../../actions/user_actions")

const mSTP = (state, ownProps) => {
    return({
    user: ownProps.user,
    allUsers: state.entities.users
})}

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(FollowerIndex);