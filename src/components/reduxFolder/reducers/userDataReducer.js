import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_DATA':
    console.log(action.payload, 'id')
      return {...state, users: action.payload};
    default:
      return state;
  }
}