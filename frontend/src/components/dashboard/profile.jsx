import React from 'react';
import { formatDate } from '../../util/date_utils';
import path from '../../images/path.jpg'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { email, firstName, lastName, birthdate, zipcode } = this.props.user
        return (
            <div>
                <div className="profile-wrapper">
                    <div className='profile' >
                        <img src={path} alt="profile-pic" className='profile-pic' />
                        <p>{`${firstName} ${lastName}`}</p>
                        <p>{email}</p>
                        <p>{formatDate(birthdate)}</p>
                        <p>{zipcode}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;