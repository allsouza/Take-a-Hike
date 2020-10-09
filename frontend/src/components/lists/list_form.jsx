import React from 'react';
import EditorContainer from '../rich-text-editor/editor_container';

class ListForm extends React.Component {
    render() {
        debugger
        return (
            <div className="modal-list">
                <h1 >{this.props.formType}</h1>
                <EditorContainer list={this.props.list} save={this.props.action}/>
            </div>
        )
    }
}

export default ListForm;