import { chunk } from 'lodash';
import CalendarDataProvider from '../core/calendarDataProvider';

const calendarData = new CalendarDataProvider();

function createCalendar(year, month, week = 0) {
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
    },
  };
}

function nextMonth(month, year) {
  let tmpMonth;
  let tmpYear;
  if (month === 11) {
    tmpYear = year + 1;
    tmpMonth = 0;
  } else {
    tmpMonth = ++month;
    tmpYear = year;
  }
  return {
    month: tmpMonth,
    year: tmpYear,
  };
}

function prevMonth(month, year) {
  let tmpMonth;
  let tmpYear;
  if (month === 0) {
    tmpYear = year - 1;
    tmpMonth = 11;
  } else {
    tmpMonth = --month;
    tmpYear = year;
  }
  return {
    month: tmpMonth,
    year: tmpYear,
  };
}

const initialCalendar = createCalendar(
  calendarData.currentYear, calendarData.currentMonth, calendarData.currentWeek,
);

const calendarReducer = (state = initialCalendar, action) => {
  switch (action.type) {
    case 'NEXT_MONTH':
      {
        const DataForNextMonth = nextMonth(state.calendar.currentMonth, state.calendar.currentYear);
        return createCalendar(DataForNextMonth.year, DataForNextMonth.month, state.currentWeek);
      }
    case 'PREV_MONTH':
      {
        const DataForPrevMonth = prevMonth(state.calendar.currentMonth, state.calendar.currentYear);
        return createCalendar(DataForPrevMonth.year, DataForPrevMonth.month, state.currentWeek);
      }
    case 'NEXT_WEEK':
      {
        let week = state.calendar.currentWeek;
        let DataForNextMonth = {
          month: state.calendar.currentMonth,
          year: state.calendar.currentYear,
        };
        ++week;
        if (week > (state.calendar.weeksInMonth - 1)) {
          DataForNextMonth = nextMonth(state.calendar.currentMonth, state.calendar.currentYear);
          week = 0;
        }
        return createCalendar(DataForNextMonth.year, DataForNextMonth.month, week);
      }
    case 'PREV_WEEK':
      {
        let week = state.calendar.currentWeek;
        let DataForNextMonth = {
          month: state.calendar.currentMonth,
          year: state.calendar.currentYear,
        };
        --week;
        if (week < 0) {
          DataForNextMonth = prevMonth(state.calendar.currentMonth, state.calendar.currentYear);
          week = (calendarData.getCalendarData(DataForNextMonth.year,
          DataForNextMonth.month).length / 7) - 1;
        }
        return createCalendar(DataForNextMonth.year, DataForNextMonth.month, week);
      }
    case 'TODAY':
      {
        return createCalendar(
          state.calendar.todayYear,
          state.calendar.todayMonth,
          state.calendar.todayWeek);
      }
    default:
      return createCalendar(
        state.calendar.currentYear,
        state.calendar.currentMonth,
        state.calendar.currentWeek);
  }
};

export default calendarReducer;

