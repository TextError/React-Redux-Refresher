import { GET_INCREMENT, GET_RESET } from './types';

export const setIncrement = () => {
  return {
    type: GET_INCREMENT,
  };
};

export const setReset = () => {
  return {
    type: GET_RESET,
  }
}