import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import './Forecasts.scss';

const Forecasts = ({ details, selectedIndex, changeForecast }) => (
  <div className="forecasts">
    <List
      details={details}
      selectedIndex={selectedIndex}
      changeForecast={changeForecast}
    />
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
  selectedIndex: PropTypes.number.isRequired,
  changeForecast: PropTypes.func.isRequired,
};

export default Forecasts;
