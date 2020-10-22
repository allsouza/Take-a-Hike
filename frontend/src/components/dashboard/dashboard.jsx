import React from 'react';
// import { Link } from 'react-router-dom';
import '../../stylesheets/reset.css'
import '../../stylesheets/dashboard.css';
import ListIndex from '../lists/list_index_container';
import path from '../../images/path.jpg'
import {formatDate} from '../../util/date_utils';
import Follower from './dashboard_following_item';
import Footer from '../footer/footer';
class DashBoard extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        // this.props.grabUser()
        //need to grab user info, this.props.fetchUsers()
        
        this.props.fetchAllUsers();
    }

    profile(){
        if(this.props.user !== ""){
            
           const { email, firstName, lastName, birthdate, zipcode } = this.props.user
           return (
               <div>
               <div className="profile-wrapper"> 
                        <div className='profile' >
                        <img src={path} alt="profile-pic" className='profile-pic'/>
                            <p>{`${firstName} ${lastName}`}</p>
                            <br/>
                            <p>{email}</p>
                            <br/>
                            <p>{formatDate(birthdate)}</p>
                            <br/>
                            <p>{zipcode}</p>
                        </div> 
                </div>

                <div className= 'profile-wrapper'>
                    <ul>
                        {this.props.user.following.map(follower => 
                            <Follower 
                                follower={follower}
                                allUsers = {this.props.allUsers}
                            />
                        )
                        }
                    </ul>
                </div>
               </div>
           )
        }
    }

    render() {  
       
        return(
            <>
            <div className='dashboard-container'>
                <div className='dashboard'>
                   <div className='index' >
                        <ListIndex />
                   </div>
                    <div className='index2'>    
                        <ul> 
                            
                            <li>You don't have any trails, find some!</li>
                            
                        </ul>
                        <button onClick={() => this.props.history.push('/map')}>Find More Trails</button>
                    </div>
                    {this.profile()}
                </div>
            </div>
                <Footer />
                </>
        )
    }
}

export default DashBoard