import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReviewss()
    }

    // map in props from Review index to list index item

    render() {
        if (!this.props.reviews) {
            return null
        } else {
            return (
                <div>
                    <h1>Review Index</h1>
                    {
                        this.props.reviews.map(review => {
                            return <ReviewIndexItem />
                        })
                    }
                </div>
            )
        }
    }
}

export default ReviewIndex;