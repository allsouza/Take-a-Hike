import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import TrailIndexitem from './trail_index_item';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return({
        trail: ownProps.trail
    })
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(TrailIndexitem))