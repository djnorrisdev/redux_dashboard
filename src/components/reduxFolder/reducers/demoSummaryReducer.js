export default (state = [], action) => {
  switch (action.type) {
    case 'DEMOSUMMARY_DATA':
      return action.payload;
    default:
      return state;
  }
};
