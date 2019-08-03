import React, { Component } from 'react';
import {MAP} from 'react-google-maps/lib/constants'
import { GoogleMap } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import { changeUnPostedItem} from '../../../actions';
Geocode.setApiKey("AIzaSyDXBtBA9u33lDuxo11DGfD2bBmll_-5uYI");
Geocode.enableDebug();
class MyComponents extends Component {
    constructor(props) {
        super(props);
        // this.map = React.createRef();
        this.state = {
            isMarkerShown:false,
            center: {lat: 49.249606, lng: -123.112262}
        }
        this.addMarker = this.addMarker.bind(this);
        this.handleMapLoad = this.handleMapLoad.bind(this);       
        this.resetCenter = this.resetCenter.bind(this); 
    }
    componentDidUpdate(prevProps){
        if(!this.state.isMarkerShown){
            this.setState({
                isMarkerShown: true,
            })
            // if(this.state.center.lat - this.props.item.location.lat < 49.03714345215196 - 49.05818322998725
            //     || this.state.center.lat - this.props.item.location.lat > 49.05818322998725 - 49.03714345215196
            //  ||  this.state.center.lng - this.props.item.location.lng > -122.42424320117186 + 122.48724292651366
            //  || this.state.center.lng - this.props.item.location.lng < 122.42424320117186  -122.48724292651366 ){
            //     this.setState({
            //         center: this.props.item.location
            //     })
            //  }
        }
    }
    addMarker(e) {
        const newPlace = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        console.log(newPlace);
        console.log(this.map);
        this.setState({
            isMarkerShown: true,
        })
        this.props.changeItem("location",newPlace);
        Geocode.fromLatLng(newPlace.lat, newPlace.lng).then(
            response => {
                const address = response.results[0].formatted_address;
                console.log(address);
                this.props.changeItem("locationStr",address);
            },
            error => {
                console.error(error);
            }
        );
    }
    handleMapLoad(map){
        console.log(map);
        this.map = map;
    }
    resetCenter(){
        let mapRef = this.map;
        console.log(mapRef);
        console.log(mapRef.getCenter().lat()+'; '+mapRef.getCenter().lng());
        this.setState({
            center: {lat: mapRef.getCenter().lat(), lng: mapRef.getCenter().lng()}
        })
    }
  render() {
     return (
            <GoogleMap
                id="marker-example"
                mapContainerStyle={this.props.mapContainerSize}
                zoom={11}
                center= {this.state.center}
                onClick = {this.addMarker}
                // ref={map => {
                //     this.map = map;
                // }}
                onLoad = {this.handleMapLoad}
                onDragEnd={this.resetCenter}
            >
                {(this.state.isMarkerShown||this.props.fatherLetShow) &&
                <Marker
                onLoad={marker => {
                    console.log('marker: ', marker)
                }}
                position={this.props.item.location}
                />
                }
            </GoogleMap>
     )
  }
}
const mapStateToProps = (state) => {
    return {
        item:state.postItemReducer
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeItem: (key,value) => {
            dispatch(changeUnPostedItem(key,value));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MyComponents);