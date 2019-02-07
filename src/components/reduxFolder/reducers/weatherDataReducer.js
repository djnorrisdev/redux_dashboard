const initialState = {
  temp: 50,
  humidity: 99,
  wind: {speed: 10, deg: 100}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_DATA':

  console.log(action.payload);
      return {
        ...state
      }
    default:
      return state;
  }
}