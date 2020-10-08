import React from 'react';
import TrailIndexitem from './trail_index_item';

export default class TrailIndex extends React.Component{
    constructor(props){
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    componentDidMount(){
        this.props.fetchTrails();
    }

    redirect(id){
        this.props.history.push(`/trails/${id}`)
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.trails.map(trail => <TrailIndexitem trail={trail} redirect={this.redirect}/>)}
                </ul>
            </div>
        )
    }
}