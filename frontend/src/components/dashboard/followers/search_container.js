import { connect } from "react-redux";
import Search from './search';

const mSTP = state => {
    const users = {};
    if(Object.values(state.entities.users).length > 0) {
        Object.values(state.entities.users).forEach(user => {
            users[`${user.firstName} ${user.lastName}`] = user
        })
    }
    return({
        allUsers: users
    })
}

const mDTP = dispatch => ({

})

export default connect(mSTP)(Search);