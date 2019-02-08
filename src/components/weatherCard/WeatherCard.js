import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../reduxFolder/actions';
import locationFinder from '../../apis/locationFinder';

class WeatherCard extends Component {

  async componentDidMount() {
    this.props.fetchWeatherData();
    
    
  // const locResponse = await locationFinder.get('/json');
  // this.props.fetchWeatherData(locResponse.data.city);
  }
getLocation = () => {
  navigator.geolocation.getCurrentPosition(location => {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    this.props.fetchWeatherData(lat, lon)
  });
}
  render() {
    return (
      <div>
        Hi
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    temps: state
  }
}
export default connect(mapStateToProps, {fetchWeatherData})(WeatherCard);