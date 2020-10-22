import React from 'react';
import '../../stylesheets/trails.scss'
import Footer from '../footer/footer';
import Reviews from '../reviews/review_index_container';

export default class TrailShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { user:{id: ""}, ready: false};
        this.saveTrail = this.saveTrail.bind(this);
        this.removeTrail = this.removeTrail.bind(this);
    }

    componentDidMount(){
        this.props.fetchTrail(this.props.match.params.id)
        this.props.fetchUsers();
    }

    componentDidUpdate(){
        if(Object.keys(this.props.user).length > 0 && this.props.user.id !== this.state.user.id){
            this.setState({user: Object.assign({}, this.props.user), ready: true})
        }
    }

    findAverage() {
        const len = this.props.reviews.length
        let totalRating = 0;
        this.props.reviews.forEach(review => {
            totalRating += review.rating
        })

        let avgRating = totalRating / len
        return (
            <p>{avgRating.toFixed(1)} Stars</p>
        )
    }

    saveTrail(){
        this.state.user.savedTrails.push(this.props.trail._id)
        this.props.updateUser(this.state.user);
    }

    removeTrail(){
        this.state.user.savedTrails = this.state.user.savedTrails.filter(trail => trail !== this.props.trail._id)
        this.props.updateUser(this.state.user);
    }

    render(){
        if(this.state.ready){
            const {trail} = this.props;
            const saved = this.state.user.savedTrails.includes(trail._id)
            return(
                <>
                <div className="trail-show">
                    <div className="title-and-info">
                    <h1>{trail.name}</h1>
                    <div className="trail-info">
                        {trail.image !== "" ?<div className="img-container"><img src={trail.image}/></div>  : null}
                        <div className="stats">
                                <span><h3>Difficulty:</h3><p>{trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}</p></span>
                                <span><h3>Length:</h3><p>{trail.length} Miles</p></span>
                            <span><h3>Ascent:</h3><p>{trail.ascent} Feet</p></span>
                            <span><h3>Descent:</h3><p>{trail.descent} Feet</p></span>
                            <span><h3>Highest point:</h3><p>{trail.high} Feet</p></span>
                            {this.props.reviews.length == 0 ? null : <span><h3>Average Rating:</h3>{this.findAverage()}</span>}
                            
                        </div>
                        <p className="summary">{trail.summary}</p>
                        <a href={trail.url} target="_blank">More info</a>
                        <div className="buttons">
                            {!saved ? <button onClick={this.saveTrail}>Save to favorites</button> :
                            <button onClick={this.removeTrail}>Remove from favorites</button> }
                        </div>
                    </div>

                    </div>
                    <div className="trail-reviews">
                        <Reviews trail={trail}/>
                    </div>
                </div>
                    <Footer />
                </>
            )
        }
        return null        
    }
}