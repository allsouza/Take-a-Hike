import React from 'react';
import '../../stylesheets/reset.css'
import '../../stylesheets/dashboard.css';
import ListIndex from '../lists/list_index_container';
import FollowerIndex from './follower_index';
import Footer from '../footer/footer';
import Profile from './profile';

class DashBoard extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
<<<<<<< HEAD
        this.props.fetchAllUsers();
    }

=======
        // if (this.props.user !== "" && this.props.user.lastname === undefined) {
        //     this.props.grabUser()
        // }
        // this.props.grabUser()
        //need to grab user info, this.props.fetchUsers()
        
        this.props.fetchAllUsers();
    }

    profile(){
        if(this.props.user !== ""){    
           const { email, firstName, lastName, birthdate, zipcode } = this.props.user
           return (
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
           )
        }
    }
>>>>>>> master

    render() {        
        return(
            <>
            <h1 className='dashboard-header'>Dashboard</h1>
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
                    <div>

                    <Profile 
                        user={this.props.user}/>
                    <FollowerIndex
                        user= {this.props.user}
                        allUsers ={this.props.allUsers}
                        />
                    </div>
                </div>
            </div>
                <Footer />
                </>
        )
    }
}

export default DashBoard