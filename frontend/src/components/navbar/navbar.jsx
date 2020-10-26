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
        // debugger
        this.setState(prevState => ({
            ready: !prevState.ready
        }));
    }

    getLinks() { 
        if (this.props.loggedIn) {
            return (
                <div className='nav-components'>
                    Welcome {this.props.name.firstName}
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
        
        // const ifCurrentUser = () => {
        //    if(this.props.loggedIn){
        //        return (
        //             null
        //         //    <div className='dropdown'>
        //         //  <Link to='/dashboard' >Dashboard </Link>
        //         //  <div className='dropdown-content'>
        //         //     <Link>My Trails</Link>
        //         //     <Link to='/search'>Search</Link>
                    
        //         //  </div>
        //         //    </div>
        //        )
        //    } 
        // }

        return (
            <div className='nav'>
                <Link to='/'><img src={path} alt="logo" className='logo1'/></Link>
                { !window.location.href.endsWith('dashboard') && !window.location.href.endsWith('/#/') ? <Link to='/'><p className='nav-title'>Dashboard</p></Link> : null}
                {/* {ifCurrentUser()} */}
                {this.props.loggedIn && !window.location.href.endsWith('map') ? <Link to='/map'>Map</Link> : null}
                { this.getLinks()}   
            </div>
        );
    }
}

export default NavBar;