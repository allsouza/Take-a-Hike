import { connect } from 'react-redux';
import DashBoard from './dashboard'
import { fetchAllUsers, updateUser, fetchUser } from '../../actions/user_actions';
// import { grabUser } from '../actions/session_actions'

const mSTP = state => {
    
    const userData = state.session.user ? 
    state.session.user.data ? state.session.user.data : state.session.user : ""
  
    return {
        user: userData,
        allUsers: state.entities.users
    }
}

const mDTP = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUser: () => dispatch(fetchUser()),
    updateUser: () => dispatch(updateUser()) 
})

export default connect(mSTP, mDTP)(DashBoard)