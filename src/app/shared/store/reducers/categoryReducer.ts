const initState = {};
const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_CAT':
      return state;
    case 'GET_CAT_ERR':
      break;
    default:
      return state;
  }
};
export default categoryReducer;
