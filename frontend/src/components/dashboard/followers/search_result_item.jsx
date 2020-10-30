import React from 'react';

export default function SearchResultItem({user, currentUser, updateUser}) {

    const followUser = () => {
        const current = Object.assign({}, currentUser)
        current.following.push(user.id);
        updateUser(current)
    }
    return(
        <li>
            <p>{user.firstName} {user.lastName}</p>
            {currentUser.following.includes(user.id) ? null :<i class="fas fa-user-plus" onClick={followUser}></i>}
        </li>
    )
}