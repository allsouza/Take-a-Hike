import React from 'react';
// import { Link } from 'react-router-dom';
import '../../stylesheets/dashboard.css'

class DashBoard extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        //need to grab user info
    }

    render() {
        // const { email, firstName, lastName, birthDate } = this.props
        return(
            <div className='dashboard-container'>
                <div className='dashboard'>
                    <p>
                        My Lists
                        <div className='index'>List Index</div>
                        <button>Create a List</button>
                    </p>
                    <p >    
                        My Favorite Trails
                        <div  className='index'>Favorite Trails Index</div>
                        <button>Find More Trails</button>
                    </p>
                    <p> Profile
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
                    </p>
                </div>
                
            </div>
        )
    }
}

export default DashBoard