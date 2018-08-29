import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';
import { getDetails } from '../../utils/FoursquareAPI';
import Error from '../Error/Error';

import MapPin from './map-pin.svg';
import './MarkerWindow.css';
import StarIcon from './green-star.svg';
import FoursquareIcon from './foursquare.svg';

class MarkerWindow extends Component {
    state = {
        loaded: false,
        error: false,
        markerDetails: {}
    }

    componentDidMount() {
        const placeId = this.props.placeId;

        getDetails(placeId)
            .then(markerDetails => {
                this.setState({ markerDetails, loaded: true })
            })
            .catch(err => {
                console.log('Foursquare API returned with ', err);
                this.setState({ error: true });
            });
    }

    render() {
        const { markerDetails, loaded, error } = this.state;
        const google = window.google; // no-undef fix https://github.com/tomchentw/react-google-maps/issues/434
        const { placeId, placePos, onToggleOpen, showInfoId, action } = this.props;
        return (
            <Marker
                icon={MapPin}
                key={placeId}
                position={placePos}
                animation={google.maps.Animation.DROP}
                onClick={() => onToggleOpen(placeId, 'open')}
            >
                {
                    (showInfoId === placeId && loaded === true && action === 'open') &&
                    < InfoWindow
                        options={{ maxWidth: 250 }}
                        key={placeId}
                        onCloseClick={() => onToggleOpen(placeId, 'close')}
                    >
                        {error ? <Error message="Foursquare didn't respond. Try again later" />
                            : <div className="details-place" tabIndex="0" key={placeId}>
                                <h3 className="details-title">
                                    <a href={markerDetails.canonicalUrl}>{markerDetails.name}</a>
                                </h3>
                                <p className="details-address">{markerDetails.location.address}</p>
                                <div className="details-rating"
                                    title={`The rating is ${markerDetails.rating}`}>
                                    <img className="icon" src={StarIcon} alt="rating star icon" aria-hidden="true" />
                                    <span className="rating-number" aria-hidden="true">{markerDetails.rating}</span>
                                </div>
                                <a className="details-fsicon" href={markerDetails.canonicalUrl} title="Read more at Foursquare">
                                    <img src={FoursquareIcon} alt="Foursquare icon" />
                                </a>
                                <div className="details-img">
                                    <img src={`${markerDetails.bestPhoto.prefix}width150${markerDetails.bestPhoto.suffix}`} alt={`Best of ${markerDetails.name}`} />
                                </div>
                            </div>
                        }
                    </InfoWindow>
                }
            </Marker >
        );
    }
}

MarkerWindow.propTypes = {
    key: PropTypes.string.isRequired,
    placePos: PropTypes.object.isRequired,
    onToggleOpen: PropTypes.func.isRequired,
}

export default MarkerWindow;