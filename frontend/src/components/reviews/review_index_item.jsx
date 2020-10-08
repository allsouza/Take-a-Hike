import React from 'react';


export default function ReviewIndexItem({ review, updateReview, deleteReview, edit }) {
    debugger
    return (
        <div>
            <h1>{review.title}</h1>
            {review.body}
            <i className="fas fa-trash"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteReview(review._id)
                }}></i>
            <i class="fa fa-pencil" 
                onClick={(e) => {
                    e.stopPropagation();
                    updateReview(review._id)
                }}
                ></i>
        </div>
    )
}