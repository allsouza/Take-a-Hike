import React from 'react';


export default function ListIndexItem({list, deleteList, edit}){
    return(
        <li key={list.id}
            onClick={() => edit(list)}>
            <p>{list.title}</p> 
            <i className="fas fa-trash" 
                onClick={(e) => {
                    e.stopPropagation();
                    deleteList(list.id)}}></i>
        </li>
    )
}