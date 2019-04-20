import { GET_INPUT } from './types';

export const setInput = data => {
  return {
    type: GET_INPUT,
    payload: data
  }
};