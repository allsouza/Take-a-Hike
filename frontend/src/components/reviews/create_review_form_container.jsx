import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';


const mSTP = (state, ownProps) => {
    return {
        review: {
            body: '',
            title: '',
            rating: 0,
            user: state.session.user,
            trail: ownProps.info
        },
        formType: 'Create Review',
        editor: 'review'
    }
};

const mDTP = dispatch => {
    return {
        action: review => dispatch(createReview(review))
    }
};

export default connect(mSTP, mDTP)(ReviewForm);