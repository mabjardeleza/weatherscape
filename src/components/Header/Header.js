import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Header.css';
import GradientBackground from './GradientBackground';

const Header = ({ date, description, cityName, countryCode, temp, image }) => (
  <div className="header-container">
    <GradientBackground
      image={image}
      backgroundImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
    />
    <div className="weather-description">{description}</div>
    <div className="weather-location">
      {cityName && `${cityName}, ${countryCode}`}
    </div>
    <div className="weather-temperature">{cityName && temp && `${temp}°`}</div>
    <div className="weather-date">
      {date && moment(date).format('MMM D, YYYY')}
    </div>
  </div>
);

Header.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  cityName: PropTypes.string,
  countryCode: PropTypes.string,
  temp: PropTypes.number,
  image: PropTypes.shape({}),
};

Header.defaultProps = {
  date: '',
  description: '',
  cityName: '',
  countryCode: '',
  temp: '',
  image: {},
};

export default Header;
