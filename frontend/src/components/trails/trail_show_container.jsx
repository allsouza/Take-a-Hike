import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { fetchTrail } from "../../actions/trails_actions";
import { fetchAllUsers, updateUser } from "../../actions/user_actions";
import TrailShow from "./trail_show";
// import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {

    const trail = state.entities.trails ? state.entities.trails[ownProps.match.params.id] : null;
    const user = Object.values(state.entities.users).length > 0 ? state.entities.users[state.session.user.id] : {};
    
    return ({
        trail: trail,
        reviews: Object.values(state.entities.reviews),
        user
    })
}

const mDTP = dispatch => {
    return ({
        fetchTrail: trailId => dispatch(fetchTrail(trailId)),
        updateUser: user => dispatch(updateUser(user)),
        fetchUsers: () => dispatch(fetchAllUsers())
    })
}

export default withRouter(connect(mSTP, mDTP)(TrailShow));