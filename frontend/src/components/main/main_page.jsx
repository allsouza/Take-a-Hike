import React from 'react';
import Take_A_Hike from '../../images/Take_A_Hike.jpg';
import hiking from '../../images/hiking.jpg';
import '../../stylesheets/main.css';
import Footer from '../../components/footer/footer';

class MainPage extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='main'>
                <img className='background' src={hiking} alt="Hiking is fun!"/>
                <div className='display'>
                <h1 className='logo-container'> <img src={Take_A_Hike} alt='logo' className='logo'/> </h1>
                <ul>Take the best hikes with Take a Hike app. Here you can:
                    <li> find great trails to hike on</li>
                    <li> leave a review of your experience</li>
                    <li> see reviews of a trail before taking the hike</li>
                    <li> see what items you should take with you</li>
                </ul> 
                </div>
                
            <Footer />
            </div>
        )
        
    }
}

export default MainPage;