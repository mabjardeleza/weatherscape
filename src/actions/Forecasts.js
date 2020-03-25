export const FORECAST = {
  REQUEST: 'request_forecast',
  SUCCESS: 'success_forecast',
  ERROR: 'error_forecast',
  SELECT: 'select_forecast',
};

export const forecastListActions = {
  request: (locationType) => ({
    type: FORECAST.REQUEST,
    payload: locationType,
  }),
  success: (forecastData) => ({
    type: FORECAST.SUCCESS,
    payload: forecastData,
  }),
  error: (error) => ({ type: FORECAST.ERROR, payload: error, error: true }),
};

export const forecastSelectionActions = {
  select: (key) => ({ type: FORECAST.SELECT, payload: key }),
};
