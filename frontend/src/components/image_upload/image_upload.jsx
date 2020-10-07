import React from 'react';
import axios from 'axios';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            selectedFile: null
        };
    }

    handleSelectFile = e => {
        this.setState({
            description: e.target.value,
            selectedFile: e.target.files[0]
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleUpload = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("file", this.state.selectedFile, this.state.description );

        axios.post("/api/photo/upload", data).then(() => {
            this.props.history.push("/");
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
        <div>
            <h1>Upload an image</h1>
            <form onSubmit={this.handleUpload}>
                <input type="text" placeholder="Photo Title" name="discription" onChange={this.onChange} />
                <input type="file" name="" id="" onChange={this.handleSelectFile} />
                <button type="submit">Upload</button>
            </form>
        </div>
        )
    }
}

export default ImageUpload;