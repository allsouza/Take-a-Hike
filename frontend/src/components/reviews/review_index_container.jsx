import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview, updateReview, fetchAuthor } from '../../actions/review_actions';
import { fetchImage } from '../../actions/image_actions';
import { openModal } from '../../actions/modal_actions';
import { updateUser, fetchAllUsers } from '../../actions/user_actions';



const mSTP = state => { 
    // find author and map to props
    
    return {
        reviews: Object.values(state.entities.reviews),
        image: state.entities.images,
        currentUserId: state.session.user.id,
        currentUser: state.session.user,
        allUsers: state.entities.users
    }
};

const mDTP = dispatch => {
    return {
        fetchReviews: (trail) => dispatch(fetchReviews(trail)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        updateReview: reviewId => dispatch(updateReview(reviewId)),
        editReview: (data, readOnly) => dispatch(openModal('review', {data: data, readOnly: readOnly})),
        openModal: (type, data) => dispatch(openModal(type, data)),
        fetchImage: (reviewId) => dispatch(fetchImage(reviewId)),
        fetchAuthor: (review) => dispatch(fetchAuthor(review)),
        updateUser: (user) => dispatch(updateUser(user)),
        fetchAllUsers: () => dispatch(fetchAllUsers())

    }
};

export default connect(mSTP, mDTP)(ReviewIndex);