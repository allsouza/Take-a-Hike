import { connect } from "react-redux";
import SavedTrails from './saved_trails_index';

const mSTP = state => {
    const trails = state.entities.users[state.session.user.id].savedTrails;
    return({
        trails: trails.map(trail => state.entities.trails[trail])
    })
}

export default connect(mSTP)(SavedTrails);