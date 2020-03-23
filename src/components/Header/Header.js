import React from 'react';
import './Header.css';
import GradientBackground from './GradientBackground';

const Header = () => (
  <div className="header-container">
    <GradientBackground gradient="cloudy" />
    <div className="weather-description">Cloudy</div>
    <div className="weather-location">Adelaide, Australia</div>
    <div className="weather-temperature">19°</div>
  </div>
);

export default Header;
