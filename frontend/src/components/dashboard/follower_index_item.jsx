import React from 'react';


class FollowerIndexItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            follower: '',
            ready: false
        }
    }

    componentDidUpdate(){
        if(Object.keys(this.props.allUsers).length > 0 && this.state.follower === ""){
            this.setState({follower: this.props.allUsers[this.props.follower], ready: true})
        }
    }
 
    render(){
       if (this.state.ready){
            const {firstName, lastName, email} = this.state.follower;
            return(
                <li>
                    <p>{firstName + ' ' + lastName}</p>
                    <p>{email}</p>
                </li>
            )
        }else{
            return null;
        }
    }
    
}

export default FollowerIndexItem;