import React from 'react';
// import { Link } from 'react-router-dom';
import '../../stylesheets/dashboard.css';
import ListIndex from '../lists/list_index_container';

class DashBoard extends React.Component {

    constructor(props) {
        super(props)
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
                    <div >    
                        My Favorite Trails
                        <div  className='index'>Fav-Trails-Index</div>
                        <br/>
                        <button>Find More Trails</button>
                    </div>
                    <div> Profile
                        <div className='profile' >
                            <img src="" alt="profile-pic" className='profile-pic'/>
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