import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Button from './Button';
import './Settings.css';

const Settings = ({ setCity, toggleUnit, unitLabel, error }) => (
  <div className="settings">
    <div className="settingsContainer">
      <div className="searchBarContainer">
        <SearchBar onChange={setCity} className="searchBarContainer" />
      </div>
      <Button onClick={toggleUnit} label={unitLabel} />
    </div>
    {error && <div className="searchBarError">We could not find location.</div>}
  </div>
);

Settings.propTypes = {
  setCity: PropTypes.func.isRequired,
  toggleUnit: PropTypes.func.isRequired,
  unitLabel: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Settings;
