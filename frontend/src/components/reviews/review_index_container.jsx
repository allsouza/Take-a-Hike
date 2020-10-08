import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview, updateReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';


const mSTP = state => {
    debugger 
    return {
        reviews: Object.values(state.entities.reviews)
    }
};

const mDTP = dispatch => {
    debugger
    return {
        fetchReviews: () => dispatch(fetchReviews()),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        updateReview: reviewId => dispatch(updateReview(reviewId)),
        editReview: (data) => dispatch(openModal('review', data)),
        openModal: (type, data) => dispatch(openModal(type, data))
    }
};

export default connect(mSTP, mDTP)(ReviewIndex);