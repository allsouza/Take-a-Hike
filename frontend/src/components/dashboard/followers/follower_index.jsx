import React from 'react';
import Follower from './follower_index_item';
import Search from './search_container';

class FollowerIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {user: {}}
        this.unfollow = this.unfollow.bind(this);
    }

    componentDidUpdate(){
        if(Object.keys(this.state.user).length === 0 && Boolean(this.props.user)){
            this.setState({user: Object.assign({}, this.props.allUsers[this.props.user.id])})
        }
    }

    unfollow(user){
        this.state.user.following = this.state.user.following.filter(ele => ele !== user)
        this.props.updateUser(this.state.user);
    }

    render(){
        return(
        <div className= 'follower-wrapper'>
        <h1>Following:</h1>
        {Object.keys(this.props.allUsers).length > 0 && Boolean(this.props.user) ? 
            <ul>
                {this.props.user.following.map(follower => {
                    return (<Follower 
                        key={follower}
                        unfollow={this.unfollow}
                        follower={this.props.allUsers[follower]}
                        // allUsers = {this.props.allUsers}
                    />)}
                )
                }
            </ul> : <h3>Not following anyone</h3> }
            <Search />
        </div>
        )
    }
}

export default FollowerIndex;