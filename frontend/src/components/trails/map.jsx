/* global google */
import React from 'react';
import MapComponent from './searchmap';

class Map extends React.Component{
  constructor(props){
    super(props);
    this.getTrails = this.getTrails.bind(this);
    this.state = {
      ready:false,
      trails: this.props.trails
    }
    
  }

  componentDidMount(){
    
    this.getTrails({lat:40.6602, lon:-73.9690});
    this.setState({
      ready:true,
    })

  }

  componentDidUpdate(){
    
    if (!this.state.ready && Object.keys(this.props.trails).length > 0){
      this.setState({ready: true})
    }
  }

  getTrails(centerCoords){
    this.props.fetchApiTrails(centerCoords);
  }

  render(){
      if(this.state.ready){
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
      }else{return null}

    
    
  }
}

export default Map;
