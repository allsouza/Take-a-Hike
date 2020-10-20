import React from 'react';
import '../../stylesheets/trails.scss'
import Footer from '../footer/footer';
import Reviews from '../reviews/review_index_container';

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
                <>
                <div className="trail-show">
                    <div className="title-and-info">
                    <h1>{trail.name}</h1>
                    <div className="trail-info">
                        {trail.image !== "" ?<div className="img-container"><img src={trail.image}/></div>  : null}
                        {/* Maybe also include a still map with the droped pin at the trail head */}
                        <div className="stats">
                                <span><h3>Difficulty:</h3><p>{trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}</p></span>
                                <span><h3>Length:</h3><p>{trail.length} Miles</p></span>
                            <span><h3>Ascent:</h3><p>{trail.ascent} Feet</p></span>
                            <span><h3>Descent:</h3><p>{trail.descent} Feet</p></span>
                            <span><h3>Highest point:</h3><p>{trail.high} Feet</p></span>
                        </div>
                        <p className="summary">{trail.summary}</p>
                        <a href={trail.url}>More info</a>
                        <div className="buttons">
                            <button>Save to favorites</button>
                        </div>
                    </div>

                    </div>
                    <div className="trail-reviews">
                        <Reviews trail={trail}/>
                        {/* Review index for the trail */}
                    </div>
                </div>
                    <Footer />
                </>
            )
        }
        return null        
    }
}