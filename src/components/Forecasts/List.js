import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({ details }) => (
  <div className="forecastsList">
    {details.map(({ validDate, temp, weather: { description } }) => (
      <ListItem
        key={validDate}
        date={validDate}
        temp={temp}
        description={description}
      />
    ))}
  </div>
);

List.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      validDate: PropTypes.string,
      temp: PropTypes.number,
      weather: PropTypes.shape({
        description: PropTypes.string,
      }).isRequired,
    }),
  ).isRequired,
};

export default List;
