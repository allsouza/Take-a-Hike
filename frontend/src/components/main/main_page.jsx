import React from './react'
import path from '../../images/path.jpg'

class MainPage extends React.component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <img src={path}/>
                <h1>Take a Hike</h1>
                <p></p>
            </div>
        )
        
    }
}

export default MainPage