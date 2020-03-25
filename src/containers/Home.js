import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  forecastListActions,
  forecastSelectionActions,
  settingsListActions,
} from '../actions';
import { Header, Forecasts, Settings } from '../components';
import UNITS from '../global/constants';
import usePosition from '../hooks';

const Home = () => {
  const { lat, lon, error } = usePosition();
  const forecast = useSelector((state) => state.forecast);
  const unitIndex = useSelector((state) => state.settings.unitIndex);
  const selectedIndex = useSelector(
    (state) => state.forecastSelection.currentForecast,
  );
  const selectedForecastKey = useSelector(
    (state) => state.forecastSelection.currentForecast,
  );
  const currentForecast =
    forecast.data.data.length > selectedForecastKey
      ? forecast.data.data[selectedForecastKey]
      : [];

  const dispatch = useDispatch();
  useEffect(() => {
    if (lat && lon) {
      dispatch(settingsListActions.setCoordinates(lat, lon));
    }
  }, [dispatch, lat, lon, error]);

  const { lat: stateLat, lon: stateLon } = useSelector(
    (state) => state.settings.coordinates,
  );

  useEffect(() => {
    if (stateLat !== null) {
      dispatch(forecastListActions.request());
    }
  }, [dispatch, stateLat, stateLon]);

  const toggleUnit = () => {
    const nextUnit = (unitIndex + 1) % UNITS.length;
    dispatch(settingsListActions.setTemperatureUnit(nextUnit));
    dispatch(forecastListActions.request());
  };

  const changeCity = (city) => {
    dispatch(settingsListActions.setCity(city));
    dispatch(forecastListActions.request());
  };

  const changeForecast = (index) => {
    dispatch(forecastSelectionActions.select(index));
  };

  return (
    <div>
      <Header
        description={currentForecast.weather.description}
        cityName={forecast.data.cityName}
        countryCode={forecast.data.countryCode}
        temp={currentForecast.temp}
      />
      <Settings
        setCity={changeCity}
        toggleUnit={toggleUnit}
        unitLabel={UNITS[unitIndex].temp}
      />
      <Forecasts
        details={forecast.data.data}
        selectedIndex={selectedIndex}
        changeForecast={changeForecast}
      />
    </div>
  );
};

export default Home;
