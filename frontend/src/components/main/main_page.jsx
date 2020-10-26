import React from 'react';
import Take_A_Hike from '../../images/Take_A_Hike.jpg';
import hiking from '../../images/hiking.jpg';
import '../../stylesheets/main.css';
import Footer from '../../components/footer/footer';
import NavBarContainer from '../navbar/navbar_container'

class MainPage extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
            <NavBarContainer />
            <div className='main'>
                {/* <img className='background' src={hiking} alt="Hiking is fun!"/> */}
                <div className='display'>
                <ul>
                    <header>Take the best hikes with Take a Hike app. Here you can:</header> 
                    <div className="logo-and-li">
                        <div className='logo-container'> 
                            <img src={Take_A_Hike} alt='logo' className='logo'/> 
                        </div>
                        <div className="li-container">
                            <li> Find great trails</li>
                            <li> Leave reviews</li>
                            <li> See what others are saying</li>
                            <li> Follow your friends</li>
                            <li> Never leave unprepared</li>
                        </div>
                    </div>
                </ul> 
                </div>
            </div>
            <Footer />
            </>
        )
        
    }
}

export default MainPage;