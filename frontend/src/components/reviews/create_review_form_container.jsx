import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';


const mSTP = state => {
    return {
        list: {
            body: '',
            title: ''
        },
        formType: 'Create Review'
    }
};

const mDTP = dispatch => {
    return {
        action: review => dispatch(createReview(review))
    }
};

export default connect(mSTP, mDTP)(ReviewForm);