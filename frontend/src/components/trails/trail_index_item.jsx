import React from 'react';
import { openModal } from '../../actions/modal_actions';
import '../../stylesheets/trails.scss'
import '../../stylesheets/trails.css'

<<<<<<< HEAD
export default class TrailIndexitem extends React.Component {
    constructor(props){
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    redirect(){
        this.props.closeModal();
        this.props.history.push(`/trails/${this.props.trail._id}`);
    }

    render(){
        const trail = this.props.trail;
        return(
            <div className="trail-index-item">
                {trail.image !== "" ?<div className="img-container"> <img src={trail.image} alt=""/> </div>: null}
                <h1>{trail.name}</h1>
                <p>{trail.summary}</p>
                <button onClick={this.redirect}>View Trail</button>
            </div>
        )
    }
=======
export default function TrailIndexitem({trail, redirect}) {
    return(
        <div className="trail-index-item"
            onClick={() => redirect(trail._id)}>
                <h1>{trail.name}</h1>
            {trail.image !== "" ?<div className="img-container"> <img src={trail.image} alt=""/> </div>: null}
            <p>{trail.summary}</p>
        </div>
    )
>>>>>>> master
}