import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/modal.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.loginGuest = this.loginGuest.bind(this)

    }


    componentDidUpdate() {
      if (this.props.loggedIn === true) this.props.closeModal()
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
            password: this.state.password
        };

        this.props.login(user)
    }

    // Render the session errors if there are any
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

    loginGuest() {
      let demo = {
        email: 'demo@mail.com',
        password: 'hunter12'
      }
      this.props.login(demo)
    }

    render() {
      const guestLoginButton = (
        <button
          onClick={this.loginGuest}
          className="button" >
          Demo as Guest
        </button>
      )
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className='form-name'>
                        <div className='title'>
                        Login
                        </div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        /> 
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        /> 
                        <div className="login-form-buttons">
                          {this.renderErrors()}
                          <input type="submit" value="Submit" className='button' />
                          {guestLoginButton}
                        </div>
                        
                       
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);
