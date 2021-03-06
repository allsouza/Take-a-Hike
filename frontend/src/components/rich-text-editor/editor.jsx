import React from "react";
import ReactQuill from "react-quill";
import { editor } from 'react-quill';
import { Toolbar, formats, modules } from './editor_toolbar';
import Parser from 'html-react-parser';
import oneStar from '../../images/1-star.png'
import twoStar from '../../images/2-star.png'
import threeStar from '../../images/3-star.png'
import fourStar from '../../images/4-star.png'
import fiveStar from '../../images/5-star.png'
// import { Block } from ReactQuill
// Block.tagName = 'DIV';
// ReactQuill.register(Block, true);

export default class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props.data)
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }

    handleBodyChange(value) {
        this.setState({ body: value })
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    save() {

        this.props.save(this.state);
        this.props.closeModal();
    }


    handleRating() {

        return <div className="radio-wrapper">
            <h3>Rating: </h3>
            <label htmlFor="1">
                <input type="radio" name="rating" id="1" value="1" onChange={this.handleChange('rating')} checked={this.state.rating == "1"} required />
                <img src={oneStar} alt="" />
            </label>
            <label htmlFor="2">
                <input type="radio" name="rating" id="2" value="2" onChange={this.handleChange('rating')} checked={this.state.rating == "2"} required />
                <img src={twoStar} alt="" />
            </label>
            <label htmlFor="3">
                <input type="radio" name="rating" id="3" value="3" onChange={this.handleChange('rating')} checked={this.state.rating == "3"} required />
                <img src={threeStar} alt="" />
            </label>
            <label htmlFor="4">
                <input type="radio" name="rating" id="4" value="4" onChange={this.handleChange('rating')} checked={this.state.rating == "4"} required />
                <img src={fourStar} alt="" />
            </label>
            <label htmlFor="5">
                <input type="radio" name="rating" id="5" value="5" onChange={this.handleChange('rating')} checked={this.state.rating == "5"} required />
                <img src={fiveStar} alt="" />
            </label>
        </div>
    }

    renderRating() {

        if (this.state.rating == 1) {
            return <div className="star-wrapper"> <i className="fas fa-star"></i></div>
        } else if (this.state.rating == 2) {
            return <div className="star-wrapper"> <i className="fas fa-star"></i><i className="fas fa-star"></i></div>
        } else if (this.state.rating == 3) {
            return <div className="star-wrapper"> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
        } else if (this.state.rating == 4) {
            return <div className="star-wrapper"> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
        } else if (this.state.rating == 5) {
            return <div className="star-wrapper"> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
        }

    }

    render() {

        return (
            <div className="rich-text-editor" >
                {this.props.readOnly ? null : <Toolbar />}
                <form>
                    {this.props.readOnly ? null : <input type="text" className="title"
                        value={this.state.title}
                        placeholder="Title"
                        readOnly={this.props.readOnly}
                        onChange={this.handleChange('title')}
                    />}
                    {this.props.editor === "review" ?
                        (this.props.readOnly ? this.renderRating() : this.handleRating()) : null}
                    <ReactQuill value={this.state.body}
                        onChange={this.handleBodyChange}
                        theme="snow"
                        modules={this.props.readOnly ? Object.assign({}, modules, { toolbar: false }) : modules}
                        formats={formats}
                        matchVisual={false}
                        bounds={'.rich-text-editor'}
                        placeholder="Start writing your list"
                        readOnly={this.props.readOnly}
                    />

                </form>
                <div className="buttons">
                    <button onClick={this.props.closeModal}>Return</button>
                    {this.props.currentUser.id === this.state.author && this.state.title !== '' ? <button onClick={this.save}>Save</button> : null}
                </div>
            </div>
        )
    }
}