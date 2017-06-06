import { combineReducers } from 'redux';
import calendar_reducer from './calendar_reducer';
import modal_reducer from './modal_reducer';


export default combineReducers({
    calendar_reducer, 
    modal_reducer
});
