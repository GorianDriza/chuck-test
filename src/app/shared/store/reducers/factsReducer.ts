import {GET_FACTS, GET_FACTS_ERROR} from '../actions/factsActions';

const initState = [];


const factsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_FACTS:
      return Object.assign(state, state.concat(action.facts.result));
    case GET_FACTS_ERROR:
      break;
    default:
      return state;
  }
};
export default factsReducer;
