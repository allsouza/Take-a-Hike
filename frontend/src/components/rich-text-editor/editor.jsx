import React from "react";
import ReactQuill from "react-quill";
import {Toolbar, formats, modules} from './editor_toolbar';
import Parser from 'html-react-parser';

export default class RichTextEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = Object.assign({}, props.data)
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }

    handleBodyChange(value){
        this.setState({body: value})
    }
    
    handleChange(field){
        return e => this.setState({[field]: e.target.value})
    }
    
    save(){
        debugger
        this.props.save(this.state);
        this.props.closeModal();
    }
    
    // handleBodyChange(value, editor){
    //     const text = editor.getText(value)
    //     this.setState({body: text})
    // }

    // onChange(content, delta, source, editor) {
    //     const text = editor.getText(content);
    //     this.setState({ content: text });
    //     console.log(text)
    // }

    render(){
        return(
            <div className="rich-text-editor" >
                <Toolbar/>
                <form>
                    <input  type="text" className="title" 
                            value={this.state.title} 
                            placeholder="Title"
                            onChange={this.handleChange('title')} 
                        />
                    {this.props.editor === "review" ? 
                        <input type='text' 
                                className="rating" 
                                value={this.state.rating}
                                onChange={this.handleChange('rating')}/> : null}
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