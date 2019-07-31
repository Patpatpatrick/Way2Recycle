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
        this.map = React.createRef();
        this.state = {
            isMarkerShown:false,
        }
        this.addMarker = this.addMarker.bind(this);
    }
    addMarker(e) {
        const newPlace = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        console.log(newPlace);
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
  render() {
     return (
            <GoogleMap
                id="marker-example"
                mapContainerStyle={{
                    height: "400px",
                    width: "800px",
                }}
                zoom={11}
                center= {{lat: 49.249606, lng: -123.112262}}
                onClick = {this.addMarker}
                ref={map => {
                    this.map = map;
                }}
                // onDragEnd={this._map.getCenter().toJSON()}
            >
                {this.state.isMarkerShown &&
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