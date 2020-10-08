/* global google */
import React from 'react';
import MapComponent from './searchmap';


class Map extends React.Component{
  constructor(props){
    super(props);
    this.getTrails = this.getTrails.bind(this);
  }

  getTrails(centerCoords){
    this.props.fetchApiTrails(centerCoords);
  }

  render(){
    return(
      <div>
        <MapComponent
          getTrails= {this.getTrails}/>
     
      </div>
    )
  }
}

export default Map;
