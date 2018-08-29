import React from 'react';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';

return (
    <div>
        <h1>
            Filter search
        </h1>
        <div>
            <Debounce>
                <input
                    type="text"
                    placeholder="What park you're looking for?"
                />
            </Debounce>
        </div>
        <div>
            <p>Showing places</p>
            <ul>
                Results
            </ul>
        </div>
    </div>
)

export default Sidebar;