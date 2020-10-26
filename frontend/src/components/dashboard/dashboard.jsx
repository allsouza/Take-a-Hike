import React from 'react';
import '../../stylesheets/reset.css'
import '../../stylesheets/dashboard.scss';
import ListIndex from '../lists/list_index_container';
import FollowerIndex from './follower_index_container';
import Footer from '../footer/footer';
import SavedTrails from './saved_trails/saved_trails_index_container';
import Profile from './profile';
import NavBarContainer from '../navbar/navbar_container';

class DashBoard extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllUsers();
    }
    
    render() {        
        return(
            <>
            <NavBarContainer /> 
            <div className='dashboard-container'>
                <div className='dashboard'>
                   <div className='left' >
                        <h1>Lists</h1>
                        <ListIndex />
                   </div>
                    <div className='center'>  
                        <h1>My Favorite Trails</h1>  
                        <SavedTrails />
                        <button onClick={() => this.props.history.push('/map')}>Find More Trails</button>
                    </div>
                    <div className='right'>

                    <Profile 
                        user={this.props.user}/>
                    <FollowerIndex
                        user= {this.props.allUsers[this.props.user.id]}
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