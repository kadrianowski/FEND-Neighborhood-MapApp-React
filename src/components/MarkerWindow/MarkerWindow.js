import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';

import { FaTree } from 'react-icons/fa';

class MarkerWindow extends Component {
    state = {
        placeDetails: {}

    }

    render() {
        const google = window.google; // no-undef fix https://github.com/tomchentw/react-google-maps/issues/434
        const { placeId, placePos, onToggleOpen } = this.props;
        return (
            <Marker
                icon={{ url: FaTree }}
                key={placeId}
                position={placePos}
                animation={google.maps.Animation.DROP}
                onClick={() => onToggleOpen(placeId, 'open')}

            >
                <InfoWindow onCloseClick={this.props.onToggleOpen}>
                    <div>
                        <h1>
                            <FaTree />
                            {" "}
                            {}
                        </h1>
                    </div>
                </InfoWindow>
            </Marker>
        )
    }
}

MarkerWindow.propTypes = {
    key: PropTypes.string.isRequired,
    placePos: PropTypes.object.isRequired,
    onToggleOpen: PropTypes.func.isRequired,
}

export default MarkerWindow;