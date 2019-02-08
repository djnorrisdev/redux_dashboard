const initialState = {
  temp: 50,
  humidity: 99,
  wind: {speed: 10, deg: 100}
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_DATA':
    console.log(action)
      return {...state, weather: action.payload}
    default:
      return state;
  }
}