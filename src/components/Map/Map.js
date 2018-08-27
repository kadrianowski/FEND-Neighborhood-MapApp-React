import React from 'react';
import { compose, withProps, withState, withHandlers } from 'recompose';
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
    withState('zoom', 'onZoomChange', 14),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onZoomChanged: ({ onZoomChange }) => () => {
                onZoomChange(refs.map.getZoom())
            }
        }
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
        zoom={props.zoom}
        ref={props.onMapMounted}
        onZoomChanged={props.onZoomChanged}
        defaultOptions={{ styles: snazzyMap }}
    >
        <Marker
            position={{ lat: 40.712776, lng: -74.005974 }}
            onClick={props.onToggleOpen}
        >
            <InfoWindow onCloseClick={props.onToggleOpen}>
                <div>
                    <FaTree />
                    {" "}
                    Controlled zoom: {props.zoom}
                </div>
            </InfoWindow>
        </Marker>
    </GoogleMap>
);

<Map />

export default Map;