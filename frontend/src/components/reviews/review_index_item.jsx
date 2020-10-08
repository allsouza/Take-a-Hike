import React from 'react';
import ImageUpload from '../image_upload/image_upload_container';

export default function ReviewIndexItem({ review, updateReview, deleteReview, edit }) {
    debugger
    return (
        <div>
            <h1>{review.title}</h1>
            {review.body}
            <br/>
            <i className="fas fa-trash"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteReview(review._id)
                }}></i>
            <br/>
            <i className="fa fa-pencil" 
                onClick={(e) => {
                    e.stopPropagation();
                    updateReview(review._id)
                }}
                ></i>
            <ImageUpload />
        </div>
    )
}