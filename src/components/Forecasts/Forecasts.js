import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import './Forecasts.css';

const Forecasts = ({ details }) => (
  <div className="forecasts">
    <List details={details} />
  </div>
);

Forecasts.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      validDate: PropTypes.string,
      temp: PropTypes.number,
      weather: PropTypes.shape({
        description: PropTypes.string,
      }).isRequired,
    }),
  ).isRequired,
};

export default Forecasts;
