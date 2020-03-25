import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onChange }) => {
  const [value, setValue] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="City"
        className="searchBar"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? onChange(value) : null)}
      />
      <button
        type="button"
        className="searchButton"
        onClick={() => onChange(value)}
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
