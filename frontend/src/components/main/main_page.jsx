import React from 'react'
import path from '../../images/path.jpg'

class MainPage extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <img src={path}/>
                <h1>Hiking is awesome</h1>
                <p>Take the best hikes with Take a Hike app</p>
            </div>
        )
        
    }
}

export default MainPage;