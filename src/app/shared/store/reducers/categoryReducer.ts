import {GET_CATEGORIES, GET_CATEGORIES_ERROR} from '../actions/categoryActions';

const initState = [];


const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.category;
    case GET_CATEGORIES_ERROR:
      break;
    default:
      return state;
  }
};
export default categoryReducer;
