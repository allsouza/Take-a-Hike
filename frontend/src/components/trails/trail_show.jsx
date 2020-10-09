import React from 'react';
import '../../stylesheets/trails.scss'
import '../../stylesheets/trails.css'

export default class TrailShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchTrail(this.props.match.params.id)
    }

    render(){
        if(this.props.trail !== undefined){
            const {trail} = this.props;
            return(
                <div className="trail-show">
                    <h1>{trail.name}</h1>
                    <div className="trail-info">
                        {trail.image !== "" ?<div className="img-container"><img src={trail.image}/></div>  : null}
                        {/* Maybe also include a still map with the droped pin at the trail head */}
                        <div className="stats">
                            <span><h3>Difficulty:</h3><p>{trail.difficulty}</p></span>
                            <span><h3>Length:</h3><p>{trail.length} miles</p></span>
                            <span><h3>Ascent:</h3><p>{trail.ascent} feet</p></span>
                            <span><h3>Descent:</h3><p>{trail.descent} feet</p></span>
                            <span><h3>Highest point:</h3><p>{trail.high} feet</p></span>
                        </div>
                        <p className="summary">{trail.summary}</p>
                        <a href={trail.url}>More info</a>
                        <div className="buttons">
                            <button>Save to favorites</button>
                        </div>
                    </div>
                    <div className="trail-reviews">
                        {/* Review index for the trail */}
                    </div>
                </div>
            )
        }
        return null        
    }
}