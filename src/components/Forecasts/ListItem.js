import React from 'react';
// import PropTypes from 'prop-types';

const ListItem = () => (
  <div className="forecastsList-item">
    <div className="forecastsList-itemUpper">
      <div>Monday</div>
      <div>18°</div>
    </div>
    <div className="forecastsList-itemLower">
      <div>Cloudy</div>
    </div>
  </div>
);

// ListItem.propTypes = {
//   details: PropTypes.shape({
//     label: PropTypes.string.isRequired,
//     convertedMaxTemp: PropTypes.number.isRequired,
//     convertedMinTemp: PropTypes.number.isRequired,
//     weather: PropTypes.shape({
//       icon: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

export default ListItem;
