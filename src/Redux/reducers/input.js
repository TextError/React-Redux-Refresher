import { GET_INPUT } from '../actions/types';

const initialState = {
  input: ''
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_INPUT:
      return {
        ...state,
        input: action.payload
      }
    default:
      return state
  }
};