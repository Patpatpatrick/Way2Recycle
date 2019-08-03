import React, { Component } from 'react';
// import {MAP} from 'react-google-maps/lib/constants'
import { GoogleMap } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
// import { connect } from 'react-redux';
// import Geocode from "react-geocode";
// import { changeUnPostedItem} from '../../../actions';
// Geocode.setApiKey("AIzaSyDXBtBA9u33lDuxo11DGfD2bBmll_-5uYI");
// Geocode.enableDebug();
class unModifiableMap extends Component {
    constructor(props) {
        super(props);
        // this.map = React.createRef();
        // this.handleMapLoad = this.handleMapLoad.bind(this);       
        // this.resetCenter = this.resetCenter.bind(this); 
    }
    // componentDidUpdate(prevProps){
    //     if(!this.state.isMarkerShown){
    //         this.setState({
    //             isMarkerShown: true,
    //         })
    //         // if(this.state.center.lat - this.props.item.location.lat < 49.03714345215196 - 49.05818322998725
    //         //     || this.state.center.lat - this.props.item.location.lat > 49.05818322998725 - 49.03714345215196
    //         //  ||  this.state.center.lng - this.props.item.location.lng > -122.42424320117186 + 122.48724292651366
    //         //  || this.state.center.lng - this.props.item.location.lng < 122.42424320117186  -122.48724292651366 ){
    //         //     this.setState({
    //         //         center: this.props.item.location
    //         //     })
    //         //  }
    //     }
    // }
    // handleMapLoad(map){
    //     console.log(map);
    //     this.map = map;
    // }
    // resetCenter(){
    //     let mapRef = this.map;
    //     console.log(mapRef);
    //     console.log(mapRef.getCenter().lat()+'; '+mapRef.getCenter().lng());
    //     this.setState({
    //         center: {lat: mapRef.getCenter().lat(), lng: mapRef.getCenter().lng()}
    //     })
    // }
  render() {
     return (
            <GoogleMap
                id="marker-example"
                mapContainerStyle={this.props.mapContainerSize}
                zoom={11}
                center= {this.props.markerLocation}
                // ref={map => {
                //     this.map = map;
                // }}
                // onLoad = {this.handleMapLoad}
                // onDragEnd={this.resetCenter}
            >
                {(this.props.fatherLetShow) &&
                <Marker
                // onLoad={marker => {
                //     console.log('marker: ', marker)
                // }}
                position={this.props.markerLocation}
                />
                }
            </GoogleMap>
     )
  }
}

export default unModifiableMap;