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
            const {openModal} = this.props
            return (
                <div className='nav-components'>
                    <button onClick={() => openModal('login')}>Login</button>
                    <button onClick={() => openModal('signup')}>Signup</button>
                </div>
            );
        }
    }

    render() {
        const ifCurrentUser = () => {
           if(this.props.loggedIn){
               return (
                 <Link to='/dashboard'>Dashboard</Link>
               )
           } 
        }

        return (
            <div className='nav'>
                <Link to='/'><img src={path} alt="logo" className='logo1'/></Link>
                <p className='nav-components'>Take a Hike</p>
                {ifCurrentUser()}
                { this.getLinks()} 
            </div>
        );
    }
}

export default NavBar;