export const SETTINGS = {
  COORDINATES: 'select_coordinates',
  CITY: 'select_city',
  UNIT: 'select_unit',
};

export const settingsListActions = {
  setCoordinates: (lat, lon) => ({
    type: SETTINGS.COORDINATES,
    payload: { lat, lon },
  }),
  setCity: (city) => ({ type: SETTINGS.CITY, payload: city }),
  setTemperatureUnit: (unit) => ({ type: SETTINGS.UNIT, payload: unit }),
};
