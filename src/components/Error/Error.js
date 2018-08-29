import React from 'react';
import PropTypes from 'prop-types';
import ErrorIcon from './error.svg';

import './Error.css';

const Error = ({ message }) => (
  <div className="error">
    <div className="message" role="alert">
      <img src={ErrorIcon} alt="Green bolt"/>
      <p>{ message }</p>
    </div>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error;
