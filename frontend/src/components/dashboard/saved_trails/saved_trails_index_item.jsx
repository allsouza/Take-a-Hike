import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedTrailIndexItem({trail}) {
    return(
        <Link to={`/trails/${trail._id}`}> <li>
            <img src={trail.image} alt=""/>
            <div>
                <h1>{trail.name}</h1>
                <h3>{trail.summary}</h3>
            </div>
        </li></Link>
    )
}