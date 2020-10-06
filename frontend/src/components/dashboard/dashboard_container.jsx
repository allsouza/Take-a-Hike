import { connect } from 'react-redux';
import DashBoard from './dashboard'

const mSTP = state => ({
    user: state.user
})

const mDTP = dispatch => ({

})

export default connect(mSTP)(DashBoard)