import React from 'react';
import Follower from './follower_index_item';

class FollowerIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {ready: false}
    }

    componentDidUpdate(){
        if(Object.keys(this.props.allUsers).length > 0 && !this.state.ready){
            this.setState({ ready: true})
        }
    }

    render(){
        return(

        <div className= 'follower-wrapper'>
        {this.state.ready ? 
            <ul>
                <h1>Following:</h1>
                {this.props.user.following.map(follower => {
                    return (<Follower 
                        follower={follower}
                        allUsers = {this.props.allUsers}
                    />)}
                )
                }
            </ul> : null}
        </div>
        )
    }
}

export default FollowerIndex;