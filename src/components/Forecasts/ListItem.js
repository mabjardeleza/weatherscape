import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ListItem = ({ date, temp, description, selected, onClick }) => (
  <button
    type="button"
    className={`forecastsList-item ${date && selected && 'selected'}`}
    onClick={onClick}
  >
    <div className="forecastsList-itemLeft">
      <div>{date && moment(date).format('dddd')}</div>
    </div>
    <div className="forecastsList-itemRight">
      <div>{date && temp && `${temp}°`}</div>
      <div className="forecastsList-description">{description}</div>
    </div>
  </button>
);

ListItem.propTypes = {
  date: PropTypes.string,
  temp: PropTypes.number,
  description: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
  date: '',
  temp: 0,
  description: '',
  selected: false,
};

export default ListItem;
