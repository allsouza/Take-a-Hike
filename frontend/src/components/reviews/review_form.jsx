import React from 'react';
import EditorContainer from '../rich-text-editor/editor_container';

class ReviewForm extends React.Component {

    render() {
        return (
            <div className="review-form">
                <h1>{this.props.formType}</h1>
                <EditorContainer 
                review={this.props.list} 
                save={this.props.action} 
                fetchReview={this.props.fetchReview}/>
            </div>
        )
    }
}

export default ReviewForm;