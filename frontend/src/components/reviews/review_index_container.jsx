import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';


const mSTP = state => ({
    reviews: Object.values(state.entities.reviews)
});

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    editReview: (data) => dispatch(openModal('review', data)),
    openModal: (type, data) => dispatch(openModal(type, data))
});

export default connect(mSTP, mDTP)(ReviewIndex);