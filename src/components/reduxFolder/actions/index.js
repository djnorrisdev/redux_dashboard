import localServer from '../../../apis/localServer';
import weather from '../../../apis/weather';

export const fetchWeatherData = () => async dispatch => {
  const response = await weather.get('/data/2.5/weather?q=Hyattsville&units=imperial&appid=f03c13d8b2b69091950481186cd86bd1')
console.log(response.data);
  dispatch({
    type: 'FETCH_WEATHER_DATA',
    payload: response.data
  })
}

export const fetchDemoSummary = () => async dispatch => {
  const response = await localServer.get('/townData');
  dispatch({
    type: 'DEMOSUMMARY_DATA',
    payload: response.data
  })
};

export const getUserData = () => async dispatch => {
  const response = await localServer.get('/users');
  dispatch({
    type: 'USER_DATA',
    payload: response.data
  })
}

export const submitPasswordInput = password => async dispatch => {
  const response = await localServer.put('/users', password)
  dispatch({
    type: 'PASSWORD_INPUT',
    payload: response.data
  })
}

// goes from action to reducer, filters it out, and 