import { fetch, addTask } from 'domain-task';

export const REQUEST_WEATHER_FORECASTS = 'REQUEST_WEATHER_FORECASTS';
export const RECEIVE_WEATHER_FORECASTS = 'RECEIVE_WEATHER_FORECASTS';

function requestWeatherForecasts (startDateIndex) {
  return {
    type: REQUEST_WEATHER_FORECASTS,
    startDateIndex
  }
}

function receiveWeatherForecasts (startDateIndex, forecasts) {
  return {
    type: RECEIVE_WEATHER_FORECASTS,
    startDateIndex,
    forecasts
  }
}

function getWeatherForecasts (startDateIndex) {
  return (dispatch, getState) => {
    if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
      let fetchTask = fetch(`api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`)
        .then(response => response.json())
        .then(data => {
          dispatch(receiveWeatherForecasts(startDateIndex, data));
        });

      addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
      dispatch(requestWeatherForecasts(startDateIndex));
    }
  }
}

export const actions = {
  getWeatherForecasts
}

export const defaultState = {
  forecasts: [],
  isLoading: false
}

export default function weatherForecastsReducer (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_WEATHER_FORECASTS:
      return {
        startDateIndex: action.startDateIndex,
        forecasts: state.forecasts,
        isLoading: true
      };

    case RECEIVE_WEATHER_FORECASTS:
      // Only accept the incoming data if it matches the most recent request. This ensures we correctly
      // handle out-of-order responses.
      if (action.startDateIndex === state.startDateIndex) {
        return {
          startDateIndex: action.startDateIndex,
          forecasts: action.forecasts,
          isLoading: false
        };
      }
      return state;

    default:
      return state;
  }
}
