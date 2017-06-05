import DataProvider from '../core/calendarDataProvider';
import { chunk } from 'lodash';

const dataProvider = new DataProvider();
const initialCalendar = createCalendar(dataProvider.currentYear, dataProvider.currentMonth, false, dataProvider.currentWeek);
console.log(initialCalendar);

function createCalendar(year, month, view, week = 0) {
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
        events: [{
                description: 'lorem lorem lorem',
                duration: 57970447,
                id: 'fsdfo34nfi',
                location: 'Minsk',
                start: '2017-06-11T07:23:50Z',
                date: 11,
                month: 6,
                year: 2017,
                title: 'rs-calendar',
                type: 'deadline'
            }

        ]
    }
}




const calendar_reducer = (state = initialCalendar, action) => {
    switch (action.type) {
        case 'NEXT_MONTH':
            {
                const DataForNextMonth = nextMonth(state.calendar.currentMonth, state.calendar.currentYear);
                return createCalendar(DataForNextMonth.year, DataForNextMonth.month, false);
            }
        case 'PREV_MONTH':
            {
                const DataForPrevMonth = prevMonth(state.calendar.currentMonth, state.calendar.currentYear);
                return createCalendar(DataForPrevMonth.year, DataForPrevMonth.month, false);
            }
        case 'NEXT_WEEK':
            {
                let week = state.calendar.currentWeek;
                let DataForNextMonth = {
                    month: state.calendar.currentMonth,
                    year: state.calendar.currentYear
                };
                ++week;
                if (week > (state.calendar.weeksInMonth - 1)) {
                    DataForNextMonth = nextMonth(state.calendar.currentMonth, state.calendar.currentYear);
                    week = 0;
                }
                return createCalendar(DataForNextMonth.year, DataForNextMonth.month, true, week);
            }
        case 'PREV_WEEK':
            {
                let week = state.calendar.currentWeek;
                let DataForNextMonth = {
                    month: state.calendar.currentMonth,
                    year: state.calendar.currentYear
                };
                --week;
                if (week < 0) {
                    DataForNextMonth = prevMonth(state.calendar.currentMonth, state.calendar.currentYear);
                    week = dataProvider.getCalendarData(DataForNextMonth.year, DataForNextMonth.month).length / 7 - 1;
                }
                return createCalendar(DataForNextMonth.year, DataForNextMonth.month, true, week);
            }
        case 'TODAY':
            {
                return createCalendar(state.calendar.todayYear, state.calendar.todayMonth);
            }
        case 'WEEK':
            {
                return createCalendar(state.calendar.currentYear, state.calendar.currentMonth, true, state.calendar.currentWeek);
            }

        case 'MONTH':
            {
                return createCalendar(state.calendar.currentYear, state.calendar.currentMonth, false, state.calendar.currentWeek);
            }
        case 'SELECT_DATE':
            return state;
        default:
            return state;
    }
}

function nextMonth(month, year) {
    let tmpMonth;
    let tmpYear;
    if (month == 11) {
        tmpYear = year + 1;
        tmpMonth = 0;
    } else {
        tmpMonth = ++month;
        tmpYear = year;
    }
    return {
        month: tmpMonth,
        year: tmpYear
    }
}

function prevMonth(month, year) {
    let tmpMonth;
    let tmpYear;
    if (month == 0) {
        tmpYear = year - 1;
        tmpMonth = 11;
    } else {
        tmpMonth = --month;
        tmpYear = year;
    }
    return {
        month: tmpMonth,
        year: tmpYear
    }
}


export default calendar_reducer;

