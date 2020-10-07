import React from 'react';
import {google} from 'react-google-maps';
const keys = require('../../config/keys_dev');

class TrailMap extends React.Component{
    constructor(props){
        super(props);
        this.myLatLng = { lat: 40.6602, lng: -73.9690 };
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${keys.googleMapsApi}&callback=initMap`;
        script.defer = true;
        script.async = true;
        window.initMap = function() {
            // JS API is loaded and available
            const map = new google.maps.Map(document.getElementById('map'),{
            center: this.myLatLng, 
            zoom: 14 
            });
        };
        document.head.appendChild(script);
    }

    componentDidMount(){
       

    }

    render(){
        return(

        <div>

            <div className= 'map' ref={(el)=> this.mapdiv = el}>

            </div>
        </div>

        )
    }
}

export default TrailMap;