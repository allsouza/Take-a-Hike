import React, {useEffect, useState} from 'react';
import SearchResultItem from './search_result_item';
import '../../../stylesheets/search_modal.scss';

export default function SearchBar({allUsers, currentUser, updateUser, closeModal}) {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    const search = () => {
        if(query === ''){
            setResult([]);
        }
        else{
            let temp = Object.keys(allUsers).filter(user => user.toLowerCase().includes(query.toLowerCase()) && allUsers[user].id !== currentUser.id)
            temp = temp.map(ele => allUsers[ele])
            setResult(temp)
        }
    }

    useEffect(search, [query])

    return(
        <div className='search-modal'>
            <h1>Find other Hikers</h1>
            <input type="text" className="search-bar" onChange={ e => setQuery(e.target.value)} placeholder="Search for users by name"/>
            <ul className='results'>
                {query !== '' ? (result.length > 0 ? result.map(ele => <SearchResultItem 
                                                            key={ele.id} 
                                                            user={ele} 
                                                            updateUser={updateUser}
                                                            currentUser={currentUser}
                />) 
                : <li>No results</li> ) : null }
            </ul>
            <button onClick={closeModal}>Return</button>
        </div>
    )
}