import React from 'react';

export default function SavedTrailIndexItem({trail}) {
   debugger
    return(
        <li key={trail.id}>
            {trail.name}
        </li>
    )
}