import React from 'react';
//import ImageUpload from '../image_upload/image_upload_container';
import ImageUpload from '../image_upload/image_upload_container';
import '../../stylesheets/reset.css'
import '../../stylesheets/reviews.css'

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { user: this.props.allUsers[props.currentUser.id], followed: true }

        this.renderRating = this.renderRating.bind(this);
    }


    componentDidMount() {
        this.findAuthor();
    }

    componentDidUpdate() {
        this.findAuthor();
    }

    renderRating() {

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

    findAuthor() {

        if (Object.keys(this.props.allUsers).length === 0 && this.props.allUsers.constructor === Object) {
            return null;
        } else {
            const variable = this.props.allUsers[this.props.review.author];
            const name = variable.firstName + ' ' + variable.lastName;
            return name;
        }

    }

    followerUser() {
        this.state.user.following.push(this.props.review.author);
        
        this.props.updateUser(this.state.user);
        this.setState({ followed: false })
    }

    findReviewTime() {
        const d = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let day = d.getDay(this.props.review.date);
        let month = monthNames[d.getMonth(this.props.review.date) - 1];
        let year = d.getFullYear(this.props.review.date);
        const authorName = this.findAuthor();

        let date = "Created - " + month + " " + day + ", " + year
        return (
            <div className="user-info-follow-wrapper">
                <h5>{date + ' by ' + authorName}</h5>
            </div>
        )
    }

    render() {
        const Div = document.createElement('div');
        Div.innerHTML = this.props.review.body;
        if (!this.props.image) {
            
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
                            }}></i> : null}
                        {this.props.review.author === this.props.currentUserId ? <i className="fa fa-pencil"
                            onClick={(e) => {
                                e.stopPropagation();
                                this.props.editReview(this.props.review)
                            }}></i> : this.findReviewTime()}
                        {this.props.allUsers[this.props.currentUser.id].following.includes(this.props.review.author) || this.props.review.author === this.props.currentUserId ? null : <i className="fas fa-user-plus"
                            onClick={(e) => {
                                e.stopPropagation();
                                this.followerUser();
                            }}
                        ></i>}
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
                    <img src={this.props.image.Location} alt="" />
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