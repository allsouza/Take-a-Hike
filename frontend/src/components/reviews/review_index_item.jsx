import React from 'react';
//import ImageUpload from '../image_upload/image_upload_container';
import ImageUpload from '../image_upload/image_upload_container';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        debugger
        this.props.fetchImage(this.props.review._id)
    }

    render() {

        if (!this.props.image) {
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
                            this.props.updateReview(this.props.review._id)
                        }}
                    ></i>
                    <ImageUpload
                        updateReview={() => this.props.updateReview}
                        reviewId={this.props.review._id}
                        imageUrl={this.props.imageUrl}
                        review={this.props.review}
                    />
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
                            this.props.updateReview(this.props.review._id)
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
//     debugger

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