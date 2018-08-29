import React from 'react';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';
import './Sidebar.css';
import Filter from './filtering-data.svg';

const Sidebar = ({ data, filterPlaces, onToggleOpen }) => {
    const { places, showingPlaces } = data;

    return (
        <aside className="sidebar">
            <h2 className="sidebar-title" tabIndex="0">
                <img src={Filter} alt="Filter" className="icon" title="Filter icon" />
                Filter results
        </h2>
            <div className="input-wrapper">
                <Debounce time="300" handler="onChange">
                    <input
                        type="text"
                        placeholder="What park are you looking for?"
                        aria-label="What park are you looking for?"
                        onChange={e => filterPlaces(e.target.value)}
                    />
                </Debounce>
            </div>
            <div className="results">
                <p className="results-summary">
                    Showing < strong >{showingPlaces.length}</strong> of <strong>{places.length}</strong> places.
          </p>
                <ul className="results-list" tabIndex="0">
                    {
                        showingPlaces.map(place =>
                            <li
                                key={place.id}
                                className="result-item"
                                tabIndex="0"
                                onClick={() => onToggleOpen(place.id, 'open')}
                            >
                                {place.name}
                            </li>
                        )
                    }
                </ul>
            </div>
        </aside>
    )
};

Sidebar.propTypes = {
    data: PropTypes.object.isRequired,
    onToggleOpen: PropTypes.func.isRequired,
    filterPlaces: PropTypes.func.isRequired
}

export default Sidebar;