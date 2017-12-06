import counterReducer from './Counter';
import weatherForecastsReducer from './WeatherForecasts';

const reducers = {
  counter: counterReducer,
  weatherForecasts: weatherForecastsReducer
};

export default reducers;
