import { combineReducers } from 'redux';
import demoSummaryReducer from './demoSummaryReducer';
import passwordReducer from './passwordReducer';
import userDataReducer from './userDataReducer';
import weatherDataReducer from './weatherDataReducer';
// import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  summaryData: demoSummaryReducer,
  password: passwordReducer,
  userData: userDataReducer,
  weatherData: weatherDataReducer  
  // form: formReducer
  // Below to get rid of errors
  // replaceMe: () => 10
});
