import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';

import { FaTree } from 'react-icons/fa';

class MarkerWindow extends Component {
    state = {
        placeDetails: {}
    }

    render() {
        const google=window.google; // no-undef fix https://github.com/tomchentw/react-google-maps/issues/434
        const {placePos, onToggleOpen, showInfoId, action } = this.props;
        return (
            <Marker
                position={placePos}
                animation={google.maps.Animation.DROP}
                onClick={() => onToggleOpen('open')}

            >
                <InfoWindow onCloseClick={this.props.onToggleOpen}>
                    <div>
                        <h1>
                            <FaTree />
                            {" "}
                            City Hall Park
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