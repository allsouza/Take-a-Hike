import React from 'react';
import EditorContainer from '../rich-text-editor/editor_container';

class ListForm extends React.Component {
    render() {
        return (
            <div className="list-form">
                <h1>{this.props.formType}</h1>
                <EditorContainer list={this.state} save={this.props.action}/>
            </div>
        )
    }
}

export default ListForm;