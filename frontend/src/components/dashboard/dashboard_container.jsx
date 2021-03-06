import { connect } from 'react-redux';
import DashBoard from './dashboard'
import { fetchAllUsers, updateUser, fetchUser } from '../../actions/user_actions';
import { fetchTrails } from '../../actions/trails_actions';
// import { grabUser } from '../actions/session_actions'

const mSTP = state => {
    // const userData = state.session.user ? 
    // state.session.user.data ? state.session.user.data : state.session.user : ""
    const userData = state.session.user ? state.session.user : "";
    return {
        user: userData,
        allUsers: state.entities.users,
        trails: Object.values(state.entities.trails).length > 0
    }
}

const mDTP = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUser: () => dispatch(fetchUser()),
    updateUser: () => dispatch(updateUser()),
    fetchTrails: () => dispatch(fetchTrails)
})

export default connect(mSTP, mDTP)(DashBoard)