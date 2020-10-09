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
    clearTimeout();
    setTimeout(() => {
      // debugger
      this.props.fetchTrails()}, 2000);
  }

  render(){
    return(
      <div>
        <MapComponent
          getTrails= {this.getTrails}
          updateBounds={this.props.updateFilter}
          trails= {this.props.trails}
          openModal={this.props.openModal}
          // get filter setter from props
          />
     
      </div>
    )
  }
}

export default Map;
