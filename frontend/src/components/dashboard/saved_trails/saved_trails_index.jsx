import React from 'react';
import SavedTrailIndexItem from './saved_trails_index_item';
import '../../../stylesheets/saved_trails_index.scss';

export default class SavedTrails extends React.Component{
    constructor(props){
        super(props);
        this.state = {ready: false}
    }

    componentDidMount(){
        this.props.fetchTrails();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.trails.length === 0 && this.props.trails.length !== 0){
            this.setState({ready: true})
        }
    }

    render(){
        return(
            <div className='saved-trails-index'>
                {this.state.ready || this.props.trails.length > 0 ? <ul>
                    {this.props.trails.map(trail => <SavedTrailIndexItem trail={trail}  key={trail.id}/>)}
                </ul>
           : <p>You don't have any trails yet</p>} </div> 
        )
    }
}