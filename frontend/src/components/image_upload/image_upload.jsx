import React from 'react';
import axios from 'axios';
import ImageUploader from 'react-images-upload';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     description: '',
        //     selectedFile: null
        // };
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
        this.uploadImages = this.uploadImages.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    uploadImages() {
        debugger
        console.log(this.state.pictures);
        let uploadPromises = this.state.pictures.map(image => {
            let data = new FormData();
            data.append('image', image, image.name)
            debugger
            return axios.post("/api/photo/upload", data).then(() => {
                this.props.history.push("/");
            }).catch(err => {
                console.log(err);
            })
        })
    }

    render() {
        return (
            <div>
                <ImageUploader
                    withIcon={true}
                    buttonText='Upload Image'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png']}
                    maxFileSize={5242880}
                />
                <button onClick={this.uploadImages}>Upload</button>
            </div>
        );
    }


    // handleSelectFile = e => {
    //     this.setState({
    //         description: e.target.value,
    //         selectedFile: e.target.files[0]
    //     });
    // };

    // onChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // handleUpload = e => {
    //     e.preventDefault();
    //     const data = new FormData(e.target);
    //     debugger
    //     data.append("file", this.state.selectedFile, this.state.description );

    //     axios.post("/api/photo/upload", data).then(() => {
    //         this.props.history.push("/");
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    // render() {
    //     return (
    //     <div>
    //         <h1>Upload an image</h1>
    //         <form onSubmit={this.handleUpload}>
    //             <input type="text" placeholder="Photo Title" name="discription" onChange={this.onChange} />
    //             <input type="file" name="" id="" onChange={this.handleSelectFile} />
    //             <button type="submit">Upload</button>
    //         </form>
    //     </div>
    //     )
    // }
}

export default ImageUpload;