import React from 'react';


export default function ListIndexItem({list, deleteList, userId}) {
    return(
        < div className='lists'>
            <p className='list-title'>{list.title}</p>
            
            {userId === list.author ? <i className="fas fa-trash" 
                onClick={(e) => {
                    e.stopPropagation();
                    deleteList(list._id)}}></i> : null}
        </div>
    )
}