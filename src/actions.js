import {createAction} from 'redux-actions';

export const prevMonth = createAction('previous month');
export const nextMonth = createAction('next month');
export const selectDate = createAction('select date');
