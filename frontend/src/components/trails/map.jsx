/* global google */
import React from 'react';
import MapComponent from './searchmap';
import NavBarContainer from '../navbar/navbar_container';

class Map extends React.Component{
  constructor(props){
    super(props);
    this.getTrails = this.getTrails.bind(this);
    this.state = {
      ready:false,
      trails: this.props.trails,
      coords: {lat:40.6602, lon:-73.9690}
    }
    
  }

  async componentDidMount(){
    
    const geoData = await fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${this.props.zipcode}&facet=state&facet=timezone&facet=dst`)
    .then(res => res.json())
    if(geoData.records.length > 0){
      this.setState({coords: { lat: geoData.records[0].fields.latitude, lon: geoData.records[0].fields.longitude}})
    }
    this.getTrails(this.state.coords);
    this.setState({
      ready:true,
    })

  }

  componentDidUpdate(){
    
  }

  getTrails(centerCoords){
    this.props.fetchApiTrails(centerCoords);
  }

  render(){
      if(this.state.ready){
        return(
  
          <div>
            <NavBarContainer />
            <MapComponent
              getTrails= {this.getTrails}
              updateBounds={this.props.updateFilter}
              trails= {this.props.trails}
              openModal={this.props.openModal}
              center={this.state.coords}
              // get filter setter from props
              />
         
          </div>
        )
      }else{return null}

    
    
  }
}

export default Map;
