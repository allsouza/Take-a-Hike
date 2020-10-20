import React from 'react';
import { formatDate } from '../../util/date_utils';


export default function ListIndexItem({list, deleteList, userId}) {
    return(
        < div className='lists'>
            <p className='list-title'>{list.title}</p>
            <span>
            {userId === list.author ? <i className="fas fa-trash" 
                onClick={(e) => {
                    e.stopPropagation();
                    deleteList(list._id)}}></i> : null}
                    Last Update: {formatDate(list.date)}</span> 
        </div>
    )
}