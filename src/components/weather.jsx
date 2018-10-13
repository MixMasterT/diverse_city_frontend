import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';

class Weather extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    console.log('this.props.weather: ', this.props.weather);
    let weather = 'loading...';
    if(this.props.weather && this.props.weather.weather && this.props.weather.weather[0]) {
      weather = this.props.weather.weather[0].description;
    }
    return (
      <div className="weather">
        <h3>Current Weather in London</h3>
        <p>{ weather }</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  weather: state.weatherReducer.weather,
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: () => dispatch(fetchWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
