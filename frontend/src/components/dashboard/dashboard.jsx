import React from 'react';
// import { Link } from 'react-router-dom';
import '../../stylesheets/reset.css'
import '../../stylesheets/dashboard.css';
import ListIndex from '../lists/list_index_container';
import path from '../../images/path.jpg'
import {formatDate} from '../../util/date_utils';

class DashBoard extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.grabUser()
        //need to grab user info, this.props.fetchUsers()
    }

    profile(){
        if(this.props.user){
            
           const { email, firstName, lastName, birthdate, zipcode } = this.props.user
           return (
               <div> Profile
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
           )
        }
    }

    render() {
        
        // debugger
        
       
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
                    {this.profile()}
                </div>
                
            </div>
        )
    }
}

export default DashBoard