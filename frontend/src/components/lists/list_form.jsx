import React from 'react';
import EditorContainer from '../rich-text-editor/editor_container';

class ListForm extends React.Component {
    render() {
        return (
            <div className="modal-list">
                <h1>{this.props.readOnly ? this.props.list.title : this.props.formType}</h1>
                <EditorContainer list={this.props.list} save={this.props.action} readOnly={this.props.readOnly}/>
            </div>
        )
    }
}

export default ListForm;