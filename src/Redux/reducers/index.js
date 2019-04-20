import { combineReducers } from 'redux';
import increment from './increment';
import input from './input';


export default combineReducers({
  increment,
  input
});