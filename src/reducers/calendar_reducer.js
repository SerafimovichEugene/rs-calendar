import calendarDataProvider from '../core/calendarDataProvider';
import eventsDataProvider from '../core/eventsDataProvider'
import { chunk } from 'lodash';

const calendarData = new calendarDataProvider();
const eventsProvider = new eventsDataProvider();
const loaded = new Event('loaded');
const loadEventsInState = new Event('loadEvents');
eventsProvider.getEvents('http://128.199.53.150/events', loaded);

const initialCalendar = createCalendar(calendarData.currentYear, calendarData.currentMonth, false, calendarData.currentWeek);

function createCalendar(year, month, view, week = 0) {
    //chunk by weeks in month   
    const dataMatrix = chunk(calendarData.getCalendarData(year, month), 7); 
    return {
        calendar: {
            weeksInMonth: dataMatrix.length,
            currentWeek: week,
            currentWeekDates: dataMatrix[week],
            currentMonth: month,
            currentMonthName: calendarData.months[month],
            currentYear: year,
            currentDataMatrix: dataMatrix,
            today: calendarData.currentDate,
            todayMonth: calendarData.currentMonth,
            todayWeek: calendarData.currentWeek,
            todayYear: calendarData.currentYear,
            daysOfWeek: calendarData.daysOfWeek,
            displayWeek: view,
            displayMonth: !view
        },
        events: eventsProvider.events
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
                    week = calendarData.getCalendarData(DataForNextMonth.year, DataForNextMonth.month).length / 7 - 1;
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
        case 'SELECT_EVENT':
            {
                console.log(action.event);
            }        
        default:
            return createCalendar(state.calendar.currentYear, state.calendar.currentMonth, false, state.calendar.currentWeek);
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

function showWholeEvent(id) {

}

export default calendar_reducer;

