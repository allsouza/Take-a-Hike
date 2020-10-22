import React from 'react';

export default function SavedTrailIndexItem({trail}) {
   
    return(
        <li key={trail.id}>
            {trail.name}
        </li>
    )
}