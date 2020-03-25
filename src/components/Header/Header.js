import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';
import GradientBackground from './GradientBackground';

const Header = ({ description, cityName, countryCode, temp }) => (
  <div className="header-container">
    <GradientBackground gradient="cloudy" />
    <div className="weather-description">{description}</div>
    <div className="weather-location">
      {cityName && `${cityName}, ${countryCode}`}
    </div>
    <div className="weather-temperature">{cityName && temp && `${temp}°`}</div>
  </div>
);

Header.propTypes = {
  description: PropTypes.string,
  cityName: PropTypes.string,
  countryCode: PropTypes.string,
  temp: PropTypes.number,
};

Header.defaultProps = {
  description: '',
  cityName: '',
  countryCode: '',
  temp: '',
};

export default Header;
