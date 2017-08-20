import React from 'react';
import CalendarMonthRow from './CalendarMonthRow';
import CalendarMonthDays from './CalendarMonthDays';
import CalendarSwitcher from './CalendarSwitcher';

export default class CalendarMonth extends React.Component {

  render() {
    const currYear = this.props.calendar.currentYear;
    const currMonth = this.props.calendar.currentMonth;
    const events = this.props.events;
    const eventsOnMonth = [];
    for (let i = 0; i < events.length; i++) {
      if (currYear === events[i].year && currMonth === events[i].month) {
        eventsOnMonth.push(events[i]);
      }
    }
    const weeks = this.props.calendar.currentDataMatrix;
    let i = 0;
    const CalendarRows = weeks.map(week => (
      <CalendarMonthRow
        week={week}
        currMonth={currMonth}
        key={++i + [currMonth] + [currYear]}
        eventsOnMonth={eventsOnMonth}
        today={this.props.calendar.today}
        todayMonth={this.props.calendar.todayMonth}
        todayYear={this.props.calendar.todayYear}
      />));
    return (
      <div
        className="container"
        id="calendar-month"
        style={{
          display: (this.props.showCalendar)
          ? 'block'
          : 'none',
        }}
      >
        <CalendarSwitcher
          onNextMonth={this.props.onNextMonth}
          onPrevMonth={this.props.onPrevMonth}
          displayMonth
          currentMonthName={this.props.calendar.currentMonthName}
          currentYear={this.props.calendar.currentYear}
        />
        <CalendarMonthDays daysOfWeek={this.props.calendar.daysOfWeek} /> 
        {CalendarRows}
      </div>
    );
  }
}
