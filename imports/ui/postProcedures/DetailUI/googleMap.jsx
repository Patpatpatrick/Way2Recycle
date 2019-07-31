import React, { Component } from 'react';
import { GoogleMap } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api';

class MyComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markerPosition: {lat: 49.2827291, lng: -123.12073750000002},
            centerPosition: {lat: 49.2827291, lng: -123.12073750000002},
            isMarkerShown:false
        }
        this.addMarker = this.addMarker.bind(this);
        this.setCenter = this.setCenter.bind(this);
    }
    addMarker(e) {
        console.log('aaa');
        const newPlace = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        console.log('avvaa');
        console.log(newPlace);
        this.setState({
            isMarkerShown: true,
            markerPosition: newPlace
        })
    }
    setCenter(e){
        // console.log(e.target.getCenter());
        // this.setState({
        //     centerPosition: e.target.getBounds()
        // })
    }
  render() {
     return (
            <GoogleMap
                id="marker-example"
                mapContainerStyle={{
                    height: "400px",
                    width: "800px",
                }}
                zoom={11}
                center= {this.state.centerPosition}
                onClick = {this.addMarker}
                onDragEnd = {this.setCenter} 
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
const mapStateToProps = (state) => {
    return {
        item:state.postItemReducer
    };
}

export default MyComponents;