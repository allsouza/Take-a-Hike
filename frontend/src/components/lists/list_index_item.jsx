import React from 'react';


export default function ListIndexItem({list, deleteList, edit}){
    return(
        <>
            <p>{list.title}</p> 
            <i className="fas fa-trash" 
                onClick={(e) => {
                    e.stopPropagation();
                    deleteList(list._id)}}></i>
        </>
    )
}