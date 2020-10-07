import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/modal.css'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            firstName: '',
            lastName: '',
            zipcode: '',
            birthdate: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            zipcode: this.state.zipcode,
            birthdate: this.state.birthdate
        };

        this.props.signup(user, this.props.history).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                    <div className='form-name'>
                        Sign Up
                        </div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <input type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            placeholder="Enter First Name"
                        />
                        <br />
                        <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            placeholder="Enter Last Name"
                        />
                        <br />
                        <input type="text"
                            value={this.state.zipcode}
                            onChange={this.update('zipcode')}
                            placeholder="Enter ZipCode"
                        />
                        <br />
                        <input type="text"
                            value={this.state.birthdate}
                            onChange={this.update('birthdate')}
                            placeholder="Birthdate (MM/DD/YYYY)"
                        />
                        <br />
                        <input type="submit" value="Submit" className='button' />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);