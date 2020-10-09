import React from 'react';
// import { Link } from 'react-router-dom';
import '../../stylesheets/reset.css'
import '../../stylesheets/dashboard.css';
import ListIndex from '../lists/list_index_container';
import path from '../../images/path.jpg'

class DashBoard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        //need to grab user info, this.props.fetchUsers()
    }

    render() {
        // const { email, firstName, lastName, birthDate } = this.props
        return(
            <div className='dashboard-container'>
                <div className='dashboard'>
                   <div className='index' >
                        <ListIndex />
                   </div>
                    <div className='index2'>    
                        <ul> 
                            <header>My Favorite Trails:</header> 
                            <li>1st trail</li>
                            <li>2nd trail</li>
                            <li>3rd trail</li>
                        </ul>
                        <button>Find More Trails</button>
                    </div>
                    <div> Profile
                        <div className='profile' >
                        <img src={path} alt="profile-pic" className='profile-pic'/>
                            <p>firstName lastName</p>
                            <p>zipcode</p>
                            <p>Following</p>
                            <p>Followers</p>
                            <p>Favorite Trails</p>
                            <p>Reviews</p>
                        </div> 
                        <div className='feed'>Following/Feed</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default DashBoard