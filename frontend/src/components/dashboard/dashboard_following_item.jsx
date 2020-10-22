import React from 'react';

class Follower extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            follower: ''
        }
    }

    componentDidMount(){
        this.findFollower();
    }

   findFollower(){
       this.setState({follower: this.props.allUsers[this.props.follower]})
       debugger
   }
 
    render(){
        debugger
        if (this.state.follower === ''){
            return null
        }else{
            const {firstName, lastName, email} = this.state.follower;
            return(
                <li>
                    <p></p>
                </li>
            )
        }
    }
}

export default Follower;