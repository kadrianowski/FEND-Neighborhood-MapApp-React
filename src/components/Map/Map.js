import React from 'react';
import { compose, withProps } from 'recompose';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerWindow from '../MarkerWindow/MarkerWindow';

import snazzyMap from '../../utils/snazzyMap.json';
import './Map.css';

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDdUXGQw9M4Ev1RgXWfHeoodC8cGcVRSiI&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div className="map"  role="application" tabIndex="0" />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultCenter={{ lat:40.7537916, lng: -73.983607 }}
        defaultZoom={12}
        defaultOptions={{ styles: snazzyMap }}
    >
        {
            props.showingPlaces.length === 0 ?
                props.places.map(place => (
                    <MarkerWindow
                        key={place.id}
                        placeId={place.id}
                        placePos={place.position}
                        onToggleOpen={props.onToggleOpen}
                        showInfoId={props.showInfoId}
                        action={props.action}
                    />
                ))
                :
                props.showingPlaces.map(place => (
                    <MarkerWindow
                        key={place.id}
                        placeId={place.id}
                        placePos={place.position}
                        onToggleOpen={props.onToggleOpen}
                        showInfoId={props.showInfoId}
                        action={props.action}
                    />
                ))
        }
    </GoogleMap>
);

Map.propTypes = {
    onToggleOpen: PropTypes.func.isRequired,
    showInfoId: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    places: PropTypes.array.isRequired,
    showingPlaces: PropTypes.array.isRequired
}

export default Map;