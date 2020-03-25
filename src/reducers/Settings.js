import { SETTINGS } from '../actions';

const initialSettings = {
  city: '',
  coordinates: {
    lat: null,
    lon: null,
  },
  unitIndex: 0,
};

export default function settings(state = initialSettings, action) {
  switch (action.type) {
    case SETTINGS.CITY:
      return {
        ...state,
        city: action.payload,
      };

    case SETTINGS.COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };

    case SETTINGS.UNIT:
      return {
        ...state,
        unitIndex: action.payload,
      };

    default:
      return state;
  }
}
