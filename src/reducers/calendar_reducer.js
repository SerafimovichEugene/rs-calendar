import DataProvider from '../core/calendarDataProvider';
import {chunk} from 'lodash';

const dataProvider = new DataProvider();
const initialCalendar = createCalendar(dataProvider.currentYear, dataProvider.currentMonth, false, dataProvider.currentWeek);

function createCalendar(year, month, view, week=0) {
    const dataMatrix = chunk(dataProvider.getCalendarData(year, month), 7); //chunk by weeks in month
    return {
        calendar: {
            weeksInMonth: dataMatrix.length,
            currentWeek: week,
            currentWeekDates: dataMatrix[week],
            currentMonth: month,
            currentMonthName: dataProvider.months[month],
            currentYear: year,
            currentDataMatrix: dataMatrix,
            today: dataProvider.currentDate,
            todayMonth: dataProvider.currentMonth,
            todayWeek: dataProvider.currentWeek,
            todayYear: dataProvider.currentYear,
            daysOfWeek: dataProvider.daysOfWeek,
            displayWeek: view,
            displayMonth: !view
        },
        events: {
            tasks: {
                task:[]
            },
            lectures: {},
            webinars: {},
        }
    }
}

const calendar_reducer = (state = initialCalendar, action) => {
    switch (action.type) {
        case 'NEXT_MONTH':
            {
                let month;
                let year;
                if (state.calendar.currentMonth == 11) {
                    year = state.calendar.currentYear + 1;
                    month = 0;
                } else {
                    month = ++state.calendar.currentMonth;
                    year = state.calendar.currentYear;
                }
                return createCalendar(year, month, false);
            }            
        case 'PREV_MONTH':
            {
                let month;
                let year;
                if (state.calendar.currentMonth == 0) {
                    year = state.calendar.currentYear - 1;
                    month = 11;
                } else {
                    month = --state.calendar.currentMonth;
                    year = state.calendar.currentYear;
                }
                return createCalendar(year, month, false);
            }
        case 'NEXT_WEEK':
            {
                
            }
        case 'PREV_WEEK':
            {
                
            }
        case 'TODAY':
            {
                return createCalendar(state.calendar.todayYear, state.calendar.todayMonth);
            }
        case 'WEEK':
            {
                console.log('week view');
                return createCalendar(state.calendar.currentYear, state.calendar.currentMonth, true, state.calendar.currentWeek);
            }

        case 'MONTH':
            {
                console.log('month view');
                return createCalendar(state.calendar.currentYear, state.calendar.currentMonth, false, state.calendar.currentWeek);
            }
        case 'SELECT_DATE':
            return state;
        default:
            return state;
    }
}

export default calendar_reducer;
