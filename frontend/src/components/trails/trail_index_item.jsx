import React from 'react';
import { openModal } from '../../actions/modal_actions';
import '../../stylesheets/trails.scss'
import '../../stylesheets/trails.css'

export default function TrailIndexitem({trail, redirect}) {
    return(
        <div className="trail-index-item"
            onClick={() => redirect(trail._id)}>
                <h1>{trail.name}</h1>
            {trail.image !== "" ?<div className="img-container"> <img src={trail.image} alt=""/> </div>: null}
            <p>{trail.summary}</p>
        </div>
    )
}