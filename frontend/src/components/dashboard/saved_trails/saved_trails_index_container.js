import { connect } from "react-redux";
import { fetchTrails } from "../../../actions/trails_actions";
import SavedTrails from './saved_trails_index';

const mSTP = state => {
    const currentUser = state.session.user.id;
    let trails = typeof state.entities.users[currentUser] !== 'undefined' ?  state.entities.users[currentUser].savedTrails : [];
    //let trails = Object.values(state.entities.users).length > 0 ? state.entities.users[currentUser].savedTrails : [];
    trails = Object.values(state.entities.trails).length > 0 ? trails.map(trail => state.entities.trails[trail]) : [];
    trails = trails.filter(trail => trail !== undefined);
    return({
        trails: trails
    })
}

const mDTP = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails())
})

export default connect(mSTP, mDTP)(SavedTrails);
