import React, { Component } from 'react';
import { GoogleMap } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api';

class MyComponents extends Component {
  render() {
     return (
            <GoogleMap
                id="marker-example"
                mapContainerStyle={{
                    height: "300px",
                    width: "600px"
                }}
                zoom={11}
                center={{
                    lat: 49.2827,
                    lng: -123.1207
                }}
            >
                <Marker
                onLoad={marker => {
                    console.log('marker: ', marker)
                }}
                position={{
                    lat: 49.2827,
                    lng: -123.1207
                }}
                />
            </GoogleMap>
     )
  }
}
export default MyComponents;