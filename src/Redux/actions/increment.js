import { GET_INCREMENT } from './types';

export const setIncrement = data => {
  return {
    type: GET_INCREMENT,
    payload: data
  };
};