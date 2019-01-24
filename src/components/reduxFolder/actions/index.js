import localServer from '../../../apis/localServer';

export const fetchDemoSummary = () => async dispatch => {
  const response = await localServer.get('/townData');
  console.log(response)
  dispatch({
    type: 'DEMOSUMMARY_DATA',
    payload: response.data
  })
};
