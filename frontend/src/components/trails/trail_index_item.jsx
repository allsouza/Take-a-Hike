import React from 'react';
import { openModal } from '../../actions/modal_actions';
import '../../stylesheets/trails.scss'

export default function TrailIndexitem({trail, redirect}) {
    return(
        <div className="trail-index-item"
            onClick={() => redirect(trail._id)}>
            {trail.image !== "" ?<div className="img-container"> <img src={trail.image} alt=""/> </div>: null}
            <h1>{trail.name}</h1>
            <p>{trail.summary}</p>
        </div>
    )
}