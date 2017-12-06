import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as WeatherForecastsStore from '../store/WeatherForecasts';

class FetchData extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    startDateIndex: PropTypes.number,
    forecasts: PropTypes.array,
    isLoading: PropTypes.bool,
    requestWeatherForecasts: PropTypes.func.isRequired
  }

  componentWillMount () {
    // This method runs when the component is first added to the page
    let startDateIndex = parseInt(this.props.match.params.startDateIndex) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }

  componentWillReceiveProps (nextProps) {
    // This method runs when incoming props (e.g., route params) change
    let startDateIndex = parseInt(nextProps.match.params.startDateIndex) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }

  renderForecastsTable () {
    return <table className='table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {this.props.forecasts && this.props.forecasts.map(forecast =>
          <tr key={forecast.dateFormatted}>
            <td>{ forecast.dateFormatted }</td>
            <td>{ forecast.temperatureC }</td>
            <td>{ forecast.temperatureF }</td>
            <td>{ forecast.summary }</td>
          </tr>
        )}
      </tbody>
    </table>;
  }

  renderPagination () {
    let prevStartDateIndex = (this.props.startDateIndex || 0) - 5;
    let nextStartDateIndex = (this.props.startDateIndex || 0) + 5;

    return <p className='clearfix text-center'>
      <Link className='btn btn-default pull-left' to={`/fetchdata/${prevStartDateIndex}`}>Previous</Link>
      <Link className='btn btn-default pull-right' to={`/fetchdata/${nextStartDateIndex}`}>Next</Link>
      { this.props.isLoading ? <span>Loading...</span> : [] }
    </p>;
  }

  render () {
    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
        { this.renderForecastsTable() }
        { this.renderPagination() }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isLoading: state.weatherForecasts.isLoading,
    forecasts: state.weatherForecasts.forecasts,
    startDateIndex: state.weatherForecasts.startDateIndex
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestWeatherForecasts: (startDateIndex) =>
      dispatch(WeatherForecastsStore.actions.getWeatherForecasts(startDateIndex))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);
