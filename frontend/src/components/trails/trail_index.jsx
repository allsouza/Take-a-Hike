import React from 'react';

export default class TrailIndex extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchTrails();
    }

    render(){
        return(
            <div>
                {}
            </div>
        )
    }
}