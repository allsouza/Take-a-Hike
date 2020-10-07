import { connect } from 'react-redux';
import DashBoard from './dashboard'

const mSTP = state => {
    const user = state.session.isAuthenticated ? state.session.user : ""
    return ({
        loggedIn: state.session.isAuthenticated,
        user
    })
}

// const mDTP = dispatch => ({
    
// })

export default connect(mSTP)(DashBoard)