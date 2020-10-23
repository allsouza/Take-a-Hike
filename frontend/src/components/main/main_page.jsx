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
                <ul>
                    <header>Take the best hikes with Take a Hike app. Here you can:</header> 
                    <div className="logo-and-li">
                        <div className='logo-container'> 
                            <img src={Take_A_Hike} alt='logo' className='logo'/> 
                        </div>
                        <div className="li-container">
                            <li> Find great trails to hike on</li>
                            <li> Leave a review of your experience</li>
                            <li> See reviews of a trail before taking the hike</li>
                            <li> See what items you should take with you</li>
                        </div>
                    </div>
                </ul> 
                </div>
                
            <Footer />
            </div>
        )
        
    }
}

export default MainPage;