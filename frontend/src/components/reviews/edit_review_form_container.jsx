import React from 'react';
import { connect } from 'react-redux';
import { fetchReview, updateReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
    debugger
    return {
        review: ownProps.info,
        formType: 'Update Review',
        errors: state.errors
    }
};

const mDTP = dispatch => {
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        action: (review) => dispatch(updateReview(review))
    }
}

export default connect(mSTP, mDTP)(ReviewForm)
