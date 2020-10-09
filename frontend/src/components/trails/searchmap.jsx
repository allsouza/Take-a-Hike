/* global google */

import React from 'react';
import {googleMapsApi} from '../../config/keys';
const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const { MarkerWithLabel} = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const MapWithASearchBox = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleMapsApi}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `700px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentDidMount() {
      const _self = this.props;
      const refs = {}
      this.setState({
        bounds: null,
        center: {
          lat: 41.9, lng: -87.624
        },
        markers: [],
        trails: Object.values(this.props.trails),
        onMapMounted: ref => {
          refs.map = ref;
          this.setState({map: ref})
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();
          
          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
          
          this.setState({
            center: nextCenter,
            markers: nextMarkers,
            trails: Object.values(this.props.trails)
          });
        
          // refs.map.fitBounds(bounds);
        },
        onIdle: () => {
          const mapBounds = refs.map.getBounds();
          const northEast= mapBounds.getNorthEast();
          const southWest= mapBounds.getSouthWest();
          const bounds = { northEast: {lat: northEast.lat(), lng: northEast.lng()}, southWest: {lat: southWest.lat(), lng: southWest.lng()}}
          this.props.updateBounds(bounds);
          this.props.getTrails({lat: refs.map.getCenter().lat(), lon: refs.map.getCenter().lng()})
          this.setState({
            trails: Object.values(this.props.trails)
          })
        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={12}
    center={props.center}
    onIdle={props.onIdle}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Find a Trail"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>

    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position}/>
      
    )}

      {props.trails.map((mark, index)=>
      <Marker
         key={index} 
         position={{lat:mark.latitude, lng: mark.longitude}}
         onClick={() => {
           props.openModal('trail-item',mark)}}
         labelAnchor={new google.maps.Point(0,0)}
        >
      </Marker>
      )}
 
  </GoogleMap>
);


export default MapWithASearchBox;