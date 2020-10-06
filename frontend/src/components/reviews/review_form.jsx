import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        return (
            <div>
                <h1>{this.props.formType}</h1>
            </div>
        )
    }
}

export default ReviewForm;