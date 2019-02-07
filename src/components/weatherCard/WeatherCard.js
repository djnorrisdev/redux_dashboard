import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../reduxFolder/actions';

class WeatherCard extends Component {

  componentDidMount() {
    this.props.fetchWeatherData();
  }

  render() {
    return (
      <div>
        Hi
      </div>
    )
  }
}
// mapStateToProps = state => {

// }
export default connect(null, {fetchWeatherData})(WeatherCard);