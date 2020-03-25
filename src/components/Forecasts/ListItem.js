import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ListItem = ({ date, temp, description }) => (
  <div className="forecastsList-item">
    <div className="forecastsList-itemUpper">
      <div>{date && moment(date).format('dddd')}</div>
      <div>{date && temp && `${temp}°`}</div>
    </div>
    <div className="forecastsList-itemLower">
      <div>{description}</div>
    </div>
  </div>
);

ListItem.propTypes = {
  date: PropTypes.string,
  temp: PropTypes.number,
  description: PropTypes.string,
};

ListItem.defaultProps = {
  date: '',
  temp: 0,
  description: '',
};

export default ListItem;
