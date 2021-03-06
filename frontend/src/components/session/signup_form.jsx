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
    }

    componentDidUpdate(){
        // let newUser = {
        //     email: this.state.email,
        //     password: this.state.password
        // };

        if (this.props.auth === true) {
            this.props.closeModal();
            // this.props.login(newUser)
                }
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
        
        this.props.signup(user);
    }

    renderErrors() {
          return (
              <ul>
                  {this.props.errors.map((error, i) => (
                      <li key={`error-${i}`}className='errors'>
                          {error}
                      </li>
                  ))}
              </ul>
          );
      }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} >
                    <div className='form-name-signup'>
                    <div className='title'>Sign Up</div>
                        <input type="text" id="input-first"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <input type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            placeholder="Enter First Name"
                        />
                        <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            placeholder="Enter Last Name"
                        />
                        <input type="text"
                            value={this.state.zipcode}
                            onChange={this.update('zipcode')}
                            placeholder="Enter ZipCode"
                        />
                        <input type="text" id="input-last"
                            value={this.state.birthdate}
                            onChange={this.update('birthdate')}
                            placeholder="Birthdate (MM/DD/YYYY)"
                        />
                        <input type="submit" value="Submit" className='button' id="signup-btn"/>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);