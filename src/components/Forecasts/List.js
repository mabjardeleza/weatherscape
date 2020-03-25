import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({ details, selectedIndex, changeForecast }) => (
  <div className="forecastsList">
    {details.map(({ validDate, temp, weather: { description } }, index) => (
      <ListItem
        key={validDate}
        date={validDate}
        temp={temp}
        description={description}
        selected={index === selectedIndex}
        onClick={() => changeForecast(index)}
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
      }),
    }),
  ).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  changeForecast: PropTypes.func.isRequired,
};

export default List;
