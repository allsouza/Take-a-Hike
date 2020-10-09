import React from 'react';
import { openModal } from '../../actions/modal_actions';
import '../../stylesheets/trails.scss'

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
                <h1 className="name">{trail.name}</h1>
                <p className="summary">{trail.summary}</p>
                <button onClick={this.redirect}>View Trail</button>
            </div>
        )
    }
}