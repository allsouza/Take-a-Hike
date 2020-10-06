import React from 'react';
import { Link } from 'react-router-dom'
import path from '../../images/path.jpg'
import '../../stylesheets/navbar.css'


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='nav-components'>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className='nav'>
                <Link to='/'><img src={path} alt="logo" className='logo1'/></Link>
                <p className='nav-components'>Take a Hike</p>
                { this.getLinks()} 
            </div>
        );
    }
}

export default NavBar;