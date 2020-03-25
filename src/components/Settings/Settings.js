import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Button from './Button';
import './Settings.css';

const Settings = ({ setCity, toggleUnit, unitLabel }) => (
  <div className="settings">
    <SearchBar onChange={setCity} />
    <Button onClick={toggleUnit} label={unitLabel} />
  </div>
);

Settings.propTypes = {
  setCity: PropTypes.func.isRequired,
  toggleUnit: PropTypes.func.isRequired,
  unitLabel: PropTypes.string.isRequired,
};

export default Settings;
