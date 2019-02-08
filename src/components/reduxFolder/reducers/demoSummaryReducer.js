// create variable for better initial state



export default (state = [], action) => {
  switch (action.type) {
    case 'DEMOSUMMARY_DATA': {
      const { payload } = action
      const towns = payload.map(item => item.town)
      const population = payload.map(item => item.data)
      // console.log('towns: ' + towns);
      return {
        chartData: {
          labels: towns,
          // datasets: [
          //   {
          //     label: 'Population',
          //     data: population,
          //     backgroundColor: [
          //       'rgba(255,99,132,0.6',
          //       'rgba(54,162,235,0.6',
          //       'rgba(255,206,86,0.6',
          //       'rgba(75,192,192,0.6',
          //       'rgba(153,102,255,0.6',
          //       'rgba(255,159,64,0.6',
          //       'rgba(255,99,132,0.6',
          //     ]
          //   }
          // ]
        }
      }
    }
    default:
      return state;
  }
}

// do data massaging above here

// export default (state = [], action) => {
//   switch (action.type) {
//     case 'DEMOSUMMARY_DATA': {
//             const { payload } = action
//       return {
//              ...state,
//             data: payload
//         };
//     default:
//       return state;
//   }
// };