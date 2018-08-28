import React from 'react';
import { compose, withProps} from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { FaTree } from 'react-icons/fa';

import snazzyMap from '../../utils/snazzyMap.json';

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDdUXGQw9M4Ev1RgXWfHeoodC8cGcVRSiI&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `477px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
        defaultZoom={16}
        ref={props.onMapMounted}
        defaultOptions={{ styles: snazzyMap }}
    >
        <Marker
            position={{ lat: 40.712776, lng: -74.005974 }}
            onClick={props.onToggleOpen}
        >
            <InfoWindow onCloseClick={props.onToggleOpen}>
                <div>
                    <h1>
                        <FaTree />
                        {" "}
                        City Hall Park
                    </h1>
                </div>
            </InfoWindow>
        </Marker>
    </GoogleMap>
);

<Map />

export default Map;