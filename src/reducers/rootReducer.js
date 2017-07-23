import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import fetchDataReducer from './fetchDataReducer';
import modalReducer from './modalReducer';
import adminReducer from './adminReducer';

export default combineReducers({
  calendarReducer,
  fetchDataReducer,
  modalReducer,
  adminReducer,
});
