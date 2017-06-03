import DataProvider from '../core/calendarDataProvider';
import {chunk} from 'lodash';

const dataProvider = new DataProvider();
const initialCalendar = createCalendar(dataProvider.currentYear, dataProvider.currentMonth);

function createCalendar(year, month) {
    const dataMatrix = chunk(dataProvider.getCalendarData(year, month), 7);
    return {
        calendar: {
            currentMonth: month,
            currentMonthName: dataProvider.months[month],
            currentYear: year,
            currentDataMatrix: dataMatrix,
            today: dataProvider.currentDate,
            todayMonth: dataProvider.currentMonth,
            todayYear: dataProvider.currentYear,
            daysOfWeek: dataProvider.daysOfWeek
        }
    }
}

const calendar_reducer = (state = initialCalendar, action) => {
    switch (action.type) {
        case 'NEXT_MONTH':
            {
                console.log('NEXT_MONTH');
                let month;
                let year;
                if (state.calendar.currentMonth == 11) {
                    year = state.calendar.currentYear + 1;
                    month = 0;
                } else {
                    month = ++state.calendar.currentMonth;
                    year = state.calendar.currentYear;
                }
                return createCalendar(year, month);
            }
        case 'PREV_MONTH':
            {
                console.log('PREV_MONTH');
                let month;
                let year;
                if (state.calendar.currentMonth == 0) {
                    year = state.calendar.currentYear - 1;
                    month = 11;
                } else {
                    month = --state.calendar.currentMonth;
                    year = state.calendar.currentYear;
                }
                return createCalendar(year, month);
            }
        case 'TODAY':
            {
                return createCalendar(state.calendar.todayYear, state.calendar.todayMonth);
            }
        case 'WEEK':
            {
                
            }
        case 'SELECT_DATE':
            console.log('SELECT_DATE');
            return state;
        default:
            return state;
    }
}

export default calendar_reducer;
