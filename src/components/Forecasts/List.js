import React from 'react';
// import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = () => (
  <div className="forecastsList">
    <ListItem />
    <ListItem />
    <ListItem />
  </div>
);

// List.propTypes = {
//   details: PropTypes.arrayOf(PropTypes.shape({
//     label: PropTypes.string.isRequired,
//     convertedMaxTemp: PropTypes.number.isRequired,
//     convertedMinTemp: PropTypes.number.isRequired,
//     weather: PropTypes.shape({
//       icon: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//     }).isRequired,
//   })).isRequired,
// };

export default List;
