import React, {Component} from 'react';
import {GoogleMap} from '@react-google-maps/api';
import {Marker} from '@react-google-maps/api';

class unModifiableMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GoogleMap
                id="marker-example"
                mapContainerStyle={this.props.mapContainerSize}
                zoom={11}
                center={this.props.markerLocation}
            >
                {(this.props.fatherLetShow) &&
                <Marker
                    position={this.props.markerLocation}
                />
                }
            </GoogleMap>
        )
    }
}

export default unModifiableMap;