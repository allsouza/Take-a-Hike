import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';


const mSTP = state => {
    return {
        review: {
            body: '',
            title: '',
            rating: 0,
            user: state.session.user,
            trail: "5f7e0e930cdb287979bc8eb4"
        },
        formType: 'Create Review',
        editor: 'review'
    }
};

const mDTP = dispatch => {
    debugger
    return {
        action: review => dispatch(createReview(review))
    }
};

export default connect(mSTP, mDTP)(ReviewForm);