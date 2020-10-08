import React from 'react';
import axios from 'axios';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            selectedFile: null
        }
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        debugger
        data.append("file", this.state.selectedFile, this.state.description);
        this.props.uploadImage(data);
    }


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSelectFile = e => {
        this.setState({
            description: e.target.value,
            selectedFile: e.target.files[0]
        });
    };

    render() {
        debugger
        if (!this.props.image) {
            return (
                <div>
                    <form onSubmit={this.handleUpload}>
                        <input type="text" placeholder="Photo Title" name="discription" onChange={this.onChange} />
                        <input type="file" name="" id="" onChange={this.handleSelectFile} />
                        <button type="submit">Upload</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="image-wrapper">
                    <img style={{ "height": "150px", "width": "150px" }} src={this.props.image.Location} alt="" srcset="" />
                </div>
            )
        }

    }



}


export default ImageUpload;