import React from "react";
import ReactQuill from "react-quill";
import {Toolbar, formats, modules} from './editor_toolbar';

export default class RichTextEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = Object.assign({}, props.list)
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleBodyChange(value){
        this.setState({body: value})
    }

    handleChange(e){
        this.setState({title: e.target.value})
    }

    save(){
        this.props.save(this.state)
    }

    render(){
        return(
            <div className="rich-text-editor" >
                <Toolbar/>
                <form>
                    <input  type="text" className="title" 
                            value={this.state.title === "Untitled" ? "" : this.state.title} 
                            placeholder="Title"
                            onChange={this.handleChange} 
                        />
                    <ReactQuill value={this.state.body}
                                onChange={this.handleBodyChange}
                                theme="snow"
                                modules={modules}
                                formats={formats}
                                bounds={'.rich-text-editor'}
                                placeholder="Start writing your list"
                        />
                </form>
                <div className= "buttons">
                    <button onClick={this.props.closeModal}>Cancel</button>
                    <button onClick={this.save}>Save</button>
                </div>
            </div>
        )
    }
}