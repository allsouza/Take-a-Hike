import React from 'react';

export default function ListShow({list, closeModal}) {
    const body = document.createElement('div');
    body.classList.add('body');
    body.innerHTML = list.body;
    debugger

    return(
        <div className="modal-list">
            <h1>{list.title}</h1>
            <div dangerouslySetInnerHTML={{__html: body}}></div>
            <div className= "buttons">
                    <button onClick={closeModal}>Return</button>
            </div>
        </div>
    )    
}