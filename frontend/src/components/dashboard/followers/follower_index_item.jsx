import React from 'react';

class FollowerIndexItem extends React.Component{ 
    render(){
        const {firstName, lastName, savedTrails} = this.props.follower;
        return(
            <li>
                <p><i className="fas fa-user-minus" onClick={() => this.props.unfollow(this.props.follower.id)}></i>{firstName + ' ' + lastName}</p>
                <p>Favorited trails: {savedTrails.length}</p>
            </li>
        )
    }
}

export default FollowerIndexItem;