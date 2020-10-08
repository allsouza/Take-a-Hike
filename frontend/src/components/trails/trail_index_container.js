import { connect } from 'mongoose';
import {fetchTrails} from '../../actions/trails_actions';
import TrailIndex from './trail_index';

const mSTP = state => {
    trails: Object.values(state.entities.trails)
}

const mDTP = dispatch => {
    fetchTrails: () => dispatch(fetchTrails())
}

export default connect(mSTP, mDTP)(TrailIndex);