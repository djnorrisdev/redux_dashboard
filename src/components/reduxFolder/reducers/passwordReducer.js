export default (state = [], action) => {
  switch (action.type) {
    case 'PASSWORD_INPUT':
      return [...state, action.password]

    default:
      return state;
  }
}
