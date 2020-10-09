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
        debugger
        this.props.fetchReviews()
    }

    // map in props from Review index to list index item

    newReview() {
        this.props.openModal('newReview');
    }

    render() {
        debugger
            if (this.props.reviews.length === 0) {
                return (
                    <div>
                        <h1>No Reviews Yet!</h1>
                        <button onClick={this.newReview}>Create Review</button>
                    </div>
                )
            } else {
                debugger
                return (
                    <div>
                        <h1>Review Index</h1>
                            <ul>
                                {
                                    this.props.reviews.map(review => {
                                        //debugger
                                        if (typeof review !== 'undefined') {
                                        return <li key={review.id} >
                                            <ReviewIndexItem review={review} 
                                            deleteReview={this.props.deleteReview} 
                                            fetchImage={this.props.fetchImage}
                                            editReview={this.props.editReview}
                                            //photo={this.props.photoId}
                                            />
                                        </li>
                                        }
                                    })
                                }
                            </ul>
                            <button onClick={this.newReview}>Create Review</button>
                    </div>
                )
            }
            
        }
    }
    
{/* <ul>
    {this.props.lists.map(list => {
        return <li key={list._id} onClick={() => { this.props.editList(list) }}>
        <ListIndexItem list={list} deleteList={this.props.deleteList} />  </li>
    })}
    updateReview={this.props.updateReview}
</ul> */}




export default ReviewIndex;