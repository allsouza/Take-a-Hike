import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ReviewIndexItem from './review_index_item';
// NEED TO IMPORT IMG UPLOAD CONTAINER !!!  Thread that in to the reviews

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
        this.newReview = this.newReview.bind(this);
        this.openReview = this.openReview.bind(this);
        this.updateUser = this.props.updateUser.bind(this);
        // this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.trail)
    }

    // map in props from Review index to list index item

    newReview() {
        this.props.openModal('newReview', this.props.trail._id);
    }

    openReview(review){
        this.props.currentUser.id === review.author ? this.props.editReview(review, false) : this.props.editReview(review, true);
    }

    render() {
            if (this.props.reviews.length === 0) {
                return (
                    <div>
                        <h1>No Reviews Yet!</h1>
                        <button onClick={this.newReview}>Create Review</button>
                    </div>
                )
            } else {
                
                
                return (
                    <div>
                    <h1>Reviews for {this.props.trail.name}</h1>
                    <button onClick={this.newReview}>Create Review</button>    
                    <ul>
                            {
                            this.props.reviews.map(review => {
                                return <li key={review._id} onClick={() => this.openReview(review)}>
                                    <ReviewIndexItem review={review} 
                                    updateUser={this.updateUser}
                                    fetchAuthor={this.props.fetchAuthor}
                                    currentUser={this.props.currentUser}
                                    currentUserId={this.props.currentUserId}
                                    deleteReview={this.props.deleteReview} 
                                    fetchImage={this.props.fetchImage}
                                    editReview={this.props.editReview}
                                    //photo={this.props.photoId}
                                    />
                                </li>
                            })
                            }
                        </ul>
                        
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