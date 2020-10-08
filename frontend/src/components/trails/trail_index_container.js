import { connect } from 'react-redux';
import {fetchTrails} from '../../actions/trails_actions';
import TrailIndex from './trail_index';

const mSTP = state => {
    return({
        trails: Object.values(state.entities.trails)
    })
    
}

const mDTP = dispatch => {
    return({
        fetchTrails: () => dispatch(fetchTrails())
    })
   
}

export default connect(mSTP, mDTP)(TrailIndex);