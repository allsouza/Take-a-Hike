import { connect } from 'react-redux';
import DashBoard from './dashboard'
import {grabUser} from '../../actions/session_actions'
// import { grabUser } from '../actions/session_actions'

const mSTP = state => {
    const userData = state.session.user ? 
     state.session.user.data ? state.session.user.data : state.session.user : ""
    return {
        user: userData
    }
}

const mDTP = dispatch => ({
    grabUser: () => dispatch(grabUser())
})

export default connect(mSTP, mDTP)(DashBoard)