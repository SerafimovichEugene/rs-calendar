import { combineReducers } from 'redux';
import calendar_reducer from './calendar_reducer';
import fetchData_reducer from './fetchData_reducer';
import modal_reducer from './modal_reducer';

export default combineReducers({
    calendar_reducer,
    fetchData_reducer, 
    modal_reducer,
});
