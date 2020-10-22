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
        this.props.fetchAllUsers();
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