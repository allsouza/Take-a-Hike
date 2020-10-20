import React from 'react';
//import ImageUpload from '../image_upload/image_upload_container';
import ImageUpload from '../image_upload/image_upload_container';
import '../../stylesheets/reset.css'
import '../../stylesheets/reviews.css'

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.renderRating = this.renderRating.bind(this);
    }


    componentDidMount() {
        //
        //this.props.fetchImage(this.props.review._id)
        //this.props.fetchReviews(this.props.trail);
    }

    renderRating() {
        debugger
        if (this.props.review.rating == 1) {
            return <div className="star-wrapper"> <p>Rating:</p><i className="fas fa-star"></i></div>   
        } else if (this.props.review.rating == 2) {
            return <div className="star-wrapper"> <p>Rating:</p> <i className="fas fa-star"></i><i className="fas fa-star"></i></div>
        } else if (this.props.review.rating == 3) {
            return <div className="star-wrapper"> <p>Rating:</p> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
        } else if (this.props.review.rating == 4) {
            return <div className="star-wrapper"> <p>Rating:</p> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
        } else if (this.props.review.rating == 5) {
            return <div className="star-wrapper"> <p>Rating:</p> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
        }
          
    }

    findReviewTime() {
        const d = new Date();
        debugger
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let day = d.getDay(this.props.review.date);
        let month = monthNames[d.getMonth(this.props.review.date) - 1];
        let year = d.getFullYear(this.props.review.date);


        let date = "Created - " + month + " " + day + ", " + year
        return (
            <h5>{date}</h5>
        )
    }

    render() {
        const Div = document.createElement('div');
        Div.innerHTML = this.props.review.body;
        if (!this.props.image) {
            debugger
            return (
                <div className="review-idx-item-wrapper">
                    <h2>{this.props.review.title}</h2>
                    <div className="rating-wrapper">{this.renderRating()}</div>
                    <p>{Div.innerText}</p>
                    <div className="review-icon-wrapper">
                        {this.props.review.author === this.props.currentUserId ? <i className="fas fa-trash"
                            onClick={(e) => {
                                e.stopPropagation();
                                this.props.deleteReview(this.props.review._id)
                            }}></i> : null }
                        {this.props.review.author === this.props.currentUserId ? <i className="fa fa-pencil"
                            onClick={(e) => {
                                e.stopPropagation();
                                this.props.editReview(this.props.review)
                            }}></i> : this.findReviewTime() }
                    </div>

                    {/* <ImageUpload
                        updateReview={() => this.props.updateReview}
                        reviewId={this.props.review._id}
                        imageUrl={this.props.imageUrl}
                        review={this.props.review}
                    /> */}
                </div>
            )
        } else {
            debugger
            return (
                <div>
                    <h1>{this.props.review.title}</h1>
                    {this.props.review.body}

                    <br />
                    <i className="fas fa-trash"
                        onClick={(e) => {
                            e.stopPropagation();
                            this.props.deleteReview(this.props.review._id)
                        }}></i>
                    <br />
                    <i className="fa fa-pencil"
                        onClick={(e) => {
                            e.stopPropagation();
                            this.props.editReview(this.props.review)
                        }}
                    ></i>
                    <img src={this.props.image.Location} alt=""/>
                </div>
            )
        }

    }
}

export default ReviewIndexItem;

// export default function ReviewIndexItem({ review, updateReview, deleteReview, edit }) {
//     

//     this.state= {

//     }
//     return (
//         <div>
//             <h1>{review.title}</h1>
//             {review.body}
//             <br/>
//             <i className="fas fa-trash"
//                 onClick={(e) => {
//                     e.stopPropagation();
//                     deleteReview(review._id)
//                 }}></i>
//             <br/>
//             <i className="fa fa-pencil" 
//                 onClick={(e) => {
//                     e.stopPropagation();
//                     updateReview(review._id)
//                 }}
//                 ></i>
//             <ImageUpload 
//             updateReview={() => updateReview}
//             reviewId={review._id}
//             />
//         </div>
//     )
// }