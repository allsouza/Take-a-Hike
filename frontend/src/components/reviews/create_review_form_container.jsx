import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';


const mSTP = (state, ownProps) => {
  
    return {
        review: {
            body: '',
            title: '',
            rating: '1',
            user: state.session.user,
            trail: ownProps.info,
            author: state.session.user.id
        },
        formType: 'Create Review',
        editor: 'review',
        errors: state.errors
    }
};

const mDTP = dispatch => {
    return {
        action: review => dispatch(createReview(review))
    }
};

export default connect(mSTP, mDTP)(ReviewForm);