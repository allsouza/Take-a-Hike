import React from 'react';
import axios from 'axios';
import '../../stylesheets/reset.css';
import '../../stylesheets/reviews.css';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            selectedFile: null,
            imageUrl: ''
        }
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("file", this.state.selectedFile, this.state.description);
        this.props.uploadImage(this.props.review, data);
        //this.handleSubmit();
    }

    handleSubmit() {
        this.props.updateReview(this.props.reviewId)
        //fetch the reivew
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
        
        if (this.props.image.length === 0) {
            return (
                <div className="img-uploader-wrapper">
                    <form className="upload-form" onSubmit={this.handleUpload}>
                        <input type="text" placeholder="Photo Title" name="discription" onChange={this.onChange} />
                        <label class="custom-file-upload">
                            <input type="file" />
                            <div className="custom-upload"><h2>Choose a File</h2></div> 
                        </label>
                        <div className="btn-wrapper"><button type="submit"><i class="fa fa-cloud-upload"></i>Upload</button></div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="image-wrapper">
                    <img style={{ "height": "150px", "width": "150px" }} src={this.props.image[0].Location} alt="image-upload" />
                </div>
            )
        }

    }



}


export default ImageUpload;