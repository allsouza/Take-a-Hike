import React from 'react';
import '../../stylesheets/reset.css'
import '../../stylesheets/dashboard.css';
import ListIndex from '../lists/list_index_container';
import FollowerIndex from './follower_index';
import Footer from '../footer/footer';
import SavedTrails from './saved_trails/saved_trails_index_container';
import Profile from './profile';

class DashBoard extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.fetchTrails();
    }


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
                        <SavedTrails />
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