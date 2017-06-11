import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import fetchDataReducer from './fetchDataReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  calendarReducer,
  fetchDataReducer,
  modalReducer,
});
