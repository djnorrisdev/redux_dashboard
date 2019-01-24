import { combineReducers } from 'redux';
import demoSummaryReducer from './demoSummaryReducer';

export default combineReducers({
  summaryData: demoSummaryReducer,
  // Below to get rid of errors
  // replaceMe: () => 10
});
