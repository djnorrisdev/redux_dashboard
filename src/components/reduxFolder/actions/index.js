import localServer from '../../../apis/localServer';

export const fetchDemoSummary = () => async dispatch => {
  const response = await localServer.get('/townData');
  dispatch({
    type: 'DEMOSUMMARY_DATA',
    payload: response.data
  })
};

// goes from action to reducer, filters it out, and 