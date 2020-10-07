import React from 'react';


export default function ReviewIndexItem({ review, updateReview, deleteReview, edit }) {
    return (
        <>
            <p>{review.title}</p>
            <i className="fas fa-trash"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteReview(review._id)
                }}></i>
            <i class="fa fa-pencil" 
                onClick={(e) => {
                    e.stopPropagation();
                    updateReview(review)
                }}
                ></i>
        </>
    )
}