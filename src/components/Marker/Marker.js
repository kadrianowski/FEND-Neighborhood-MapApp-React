import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';

class MarkerWindow extends Component {
    render() {
        return (
            <Marker>
                <InfoWindow>

                </InfoWindow>
            </Marker>
        )
    }
}

export default MarkerWindow;