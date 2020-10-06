import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview } from '../../actions/review_actions';


const mSTP = state => ({
    reviews: Object.values(state.reviews)
});

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewIndex);