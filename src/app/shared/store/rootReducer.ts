import {combineReducers} from 'redux';
import categoryReducer from './reducers/categoryReducer';
import factsReducer from './reducers/factsReducer';

const rootReducer = combineReducers(
  {
    category: categoryReducer,
    facts: factsReducer
  }
);

export default rootReducer;
