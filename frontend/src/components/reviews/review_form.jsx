import React from 'react';
import EditorContainer from '../rich-text-editor/review_editor_container';
import ImageUpload from '../image_upload/image_upload_container';
import '../../stylesheets/modal.css'


class ReviewForm extends React.Component {

    render() {
        return (
            <div className="modal-review">
                <h1>{this.props.readOnly ? this.props.review.title : this.props.formType}</h1>
                <EditorContainer 
                review={this.props.review} 
                save={this.props.action} 
                readOnly={this.props.readOnly}/>
            </div>
        )
    }
}

export default ReviewForm;