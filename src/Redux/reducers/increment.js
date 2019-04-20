import { GET_INCREMENT, GET_RESET } from '../actions/types';

const initialState = {
  increment: 0
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_INCREMENT:
      return {
        ...state,
        increment: state.increment + 1
      }
    case GET_RESET:
      return {
        ...state,
        increment: 0
      }
    default:
      return state
  }
};