import DataProvider from '../core/calendarDataProvider'; 
import  { chunk } from 'lodash';

const dataProvider = new DataProvider();

export function createCalendar(year, month) {
    const dataMatrix = chunk(dataProvider.getCalendarData(year, month), 7);
    return {
        Calendar: {
            currentMonth: month,
            currentYear: year,
            currentDataMatrix: dataMatrix,
            today: dataProvider.currentDate,
            todayMonth: dataProvider.currentMonth,
            todayYear: dataProvider.currentYear
        }        
    }
}

export const calendar_reducer = (state , action) => {

    switch(action.type) {
        case 'NEXT_MONTH':{
            let month;
            let year;
            if(state.Calendar.currentMonth == 11) {
                year = state.currentYear + 1;
                month = 0;
            }
            else { 
                month = ++state.Calendar.currentMonth; 
                year = state.Calendar.currentYear;
            }
            return createCalendar(year, month);
        }
            
        case 'PREV_MONTH':
            return {

            }
        case 'SELECT_DATE':
            return state;
    }
}
