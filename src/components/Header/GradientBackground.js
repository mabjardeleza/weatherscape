import React from 'react';
import PropTypes from 'prop-types';

const GradientBackground = ({ children, gradient }) => (
  <div className={`gradient-background ${gradient}`}>{children}</div>
);

GradientBackground.propTypes = {
  children: PropTypes.node,
  gradient: PropTypes.string,
};

GradientBackground.defaultProps = {
  children: null,
  gradient: '',
};

export default GradientBackground;
