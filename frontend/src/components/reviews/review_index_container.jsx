import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview, updateReview } from '../../actions/review_actions';
import { fetchImage } from '../../actions/image_actions';
import { openModal } from '../../actions/modal_actions';


const mSTP = state => { 
    debugger
    return {
        reviews: Object.values(state.entities.reviews),
        image: state.entities.images
    }
};

const mDTP = dispatch => {
    return {
        fetchReviews: (trail) => dispatch(fetchReviews(trail)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        updateReview: reviewId => dispatch(updateReview(reviewId)),
        editReview: (data) => dispatch(openModal('review', data)),
        openModal: (type, data) => dispatch(openModal(type, data)),
        fetchImage: (reviewId) => dispatch(fetchImage(reviewId)),
    }
};

export default connect(mSTP, mDTP)(ReviewIndex);