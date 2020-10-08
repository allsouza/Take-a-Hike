import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { fetchTrail } from "../../actions/trails_actions";
import TrailShow from "./trail_show"

const mSTP = (state, ownProps) => {
    const trail = state.entities.trails ? state.entities.trails[ownProps.match.params.id] : null;
    return({
        trail: trail
    })
}

const mDTP = dispatch => {
    return({
        fetchTrail: trailId => dispatch(fetchTrail(trailId))
    })
}

export default withRouter(connect(mSTP, mDTP)(TrailShow));