import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ReviewIndexItem from './review_index_item';
// NEED TO IMPORT IMG UPLOAD CONTAINER !!!  Thread that in to the reviews

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
        this.newReview = this.newReview.bind(this);
        // this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews()
    }

    // map in props from Review index to list index item

    newReview() {
        this.props.openModal('newReview');
    }

    render() {
        if (!this.props.reviews) {
            return null
        } else {
            return (
                <div>
                    <h1>Review Index</h1>
                        <ul>
                            {
                                this.props.reviews.map(review => {
                                    debugger
                                    return <li key={review.id} onClick={() => this.props.editReview(review)}>
                                        <ReviewIndexItem review={review} 
                                        deleteReview={this.props.deleteReview} 
                                        updateReview={this.props.updateReview}/>
                                    </li>
                                })
                            }
                        </ul>
                        <button onClick={this.newReview}>Create Review</button>
                </div>
            )
        }
    }
}

export default ReviewIndex;