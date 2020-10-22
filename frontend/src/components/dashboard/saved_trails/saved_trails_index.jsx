import React from './react';
import SavedTrailIndexItem from './saved_trails_index_item';

export default class SavedTrails extends React.Component{

    render(){
        return(
            <div className='saved-trails-index'>
                <ul>
                    {this.props.trails.map(trail => <SavedTrailIndexItem trail={trail} />)}
                </ul>
            </div>
        )
    }
}