import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import fetchDataReducer from './fetchDataReducer';
import modalReducer from './modalReducer';
import adminReducer from './adminReducer';
import displayReducer from './displayReducer';
import adminFormsReducer from './adminFormsReducer';


export default combineReducers({
  calendarReducer,
  fetchDataReducer,
  modalReducer,
  adminReducer,
  displayReducer,
  adminFormsReducer,
});
