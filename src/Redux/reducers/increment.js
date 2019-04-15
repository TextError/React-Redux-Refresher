import { GET_INCREMENT } from '../actions/types';

const initialState = {
  increment: 0
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_INCREMENT:
      return {
        ...state,
        increment: action.payload
      }
    default:
      return state
  }
};