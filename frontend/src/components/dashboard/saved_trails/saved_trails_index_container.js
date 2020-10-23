import { connect } from "react-redux";
import SavedTrails from './saved_trails_index';

const mSTP = state => {
    debugger
    const currentUser = state.session.user.id;
    const trails = Object.values(state.entities.users).length > 0 ? state.entities.users[currentUser].savedTrails : [];
    return({
        trails: trails.map(trail => state.entities.trails[trail])
    })
}

export default connect(mSTP)(SavedTrails);