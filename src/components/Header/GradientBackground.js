import React from 'react';
import PropTypes from 'prop-types';

const GradientBackground = ({ backgroundImage, gradient }) => (
  <div
    style={{
      background: `linear-gradient(145deg, rgba(120, 202, 210, 0.8) 0%, rgba(98, 168, 172, 0.8) 51%, rgba(84, 151, 167, 0.8) 75%), url(${backgroundImage})`,
    }}
    className={`gradient-background ${gradient}`}
  />
);

GradientBackground.propTypes = {
  backgroundImage: PropTypes.string,
  gradient: PropTypes.string,
};

GradientBackground.defaultProps = {
  backgroundImage: '',
  gradient: '',
};

export default GradientBackground;
