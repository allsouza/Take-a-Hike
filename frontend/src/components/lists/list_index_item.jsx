import React from 'react';
import { formatDate } from '../../util/date_utils';


export default function ListIndexItem({list, deleteList, userId, allUsers, openList}) {
    return(
        <li onClick={() => openList(list)}>
            <div>
                <p className='list-title'>{list.title}</p>
                <span>
                        Last Update: {formatDate(list.date)}</span> 
            </div>
            <div>
                {userId === list.author ? <i className="fas fa-trash" 
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteList(list._id)}}></i> : 
                    <span>by {allUsers[list.author].firstName} {allUsers[list.author].lastName}</span> }
            </div>
        </li>
    )
}