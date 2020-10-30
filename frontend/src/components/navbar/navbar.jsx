import React, { useReducer } from 'react';
import { Link, useLocation } from 'react-router-dom'
import path from '../../images/path.jpg'
import '../../stylesheets/navbar.css'


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.state = {ready: true}
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    componentDidMount() {
        this.setState(prevState => ({
            ready: !prevState.ready
        }));
    }

    getLinks() { 
        if (this.props.loggedIn) {
            return (
                <div className='nav-components'>
                    <h1>Welcome {this.props.name.firstName}!</h1>
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

        return (
            <div className='nav'>
                <div className="nav-logo">
                    <Link to='/'><img src={path} alt="logo" className='logo1'/></Link>
                    <h1>Take a Hike</h1>
                </div>
                { !window.location.href.endsWith('dashboard') && !window.location.href.endsWith('/#/') ? <Link to='/'><p className='nav-title'>Dashboard</p></Link> : null}
                {/* {ifCurrentUser()} */}
                {this.props.loggedIn && !window.location.href.endsWith('map') ? <Link to='/map'>Map</Link> : null}
                { this.getLinks()}   
            </div>
        );
    }
}

export default NavBar;