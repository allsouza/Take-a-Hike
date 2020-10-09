import React from 'react';
import EditorContainer from '../rich-text-editor/review_editor_container';
import ImageUpload from '../image_upload/image_upload_container';
import '../../stylesheets/modal.css'


class ReviewForm extends React.Component {

    render() {
        return (
            <div className="modal-list">
                <h1>{this.props.formType}</h1>
                <EditorContainer 
                review={this.props.review} 
                save={this.props.action} 
                editor={this.props.editor}/>
            </div>
        )
    }
}

export default ReviewForm;