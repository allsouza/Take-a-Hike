import React from 'react';
import Follower from './follower_index_item';

class FollowerIndex extends React.Component{

    render(){
        return(

        <div className= 'follower-wrapper'>
            <ul>
                <h1>Following:</h1>
                {this.props.user.following.map(follower => {
                    return (<Follower 
                        follower={follower}
                        allUsers = {this.props.allUsers}
                    />)}
                )
                }
            </ul>
        </div>
        )
    }
}

export default FollowerIndex;