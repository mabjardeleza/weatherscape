import { FORECAST } from '../actions';

const initialForecast = {
  data: {
    cityName: '',
    countryCode: '',
    data: [
      {
        validDate: '',
        temp: 0,
        label: '',
        day: 0,
        weekday: '',
        month: '',
        maxTemp: 0,
        minTemp: 0,
        windSpd: 0,
        windCdir: 'NA',
        pres: 0,
        rh: 0,
        weather: {
          icon: '',
          description: '',
        },
      },
    ],
  },
  loading: false,
  error: false,
};

export function forecast(state = initialForecast, action) {
  switch (action.type) {
    case FORECAST.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case FORECAST.SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: false,
      };

    case FORECAST.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}

const initialForecastKey = {
  currentForecast: 0,
};

export function forecastSelection(state = initialForecastKey, action) {
  switch (action.type) {
    case FORECAST.SELECT:
      return {
        currentForecast: action.payload,
      };

    default:
      return state;
  }
}
