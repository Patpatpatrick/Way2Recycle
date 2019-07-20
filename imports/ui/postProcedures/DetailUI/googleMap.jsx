import React, { Component } from 'react';
import { GoogleMap } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api';

class MyComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markerPosition: {lat: 49.2827291, lng: -123.12073750000002},
            isMarkerShown:false
        }
        this.addMarker = this.addMarker.bind(this);
    }
    addMarker(e) {
        const newPlace = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        console.log(newPlace);
         this.setState({
            isMarkerShown:true
         })
       }
  render() {
     return (
            <GoogleMap
                id="marker-example"
                mapContainerStyle={{
                    height: "300px",
                    width: "600px"
                }}
                zoom={11}
                center={this.state.markerPosition}
                onClick = {this.addMarker}
            >
                {/* {this.state.isMarkerShown && */}
                <Marker
                onLoad={marker => {
                    console.log('marker: ', marker)
                }}
                position={this.state.markerPosition}
                />
                {/* } */}
            </GoogleMap>
     )
  }
}
export default MyComponents;