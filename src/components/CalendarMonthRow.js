import React from 'react';
import EventMonth from './EventMonth';

export default class CalendarMonthRow extends React.Component {

  isToday(dateObj) {
    let isToday = false;
    if (this.props.today === dateObj.date &&
      this.props.todayMonth === dateObj.month &&
      this.props.todayYear === dateObj.year) {
      isToday = true;
    }
    return isToday;
  }

  render() {
    const eventsOnMonth = this.props.eventsOnMonth;
    const dates = this.props.week.map((dateObj) => {
      const isInCurrMonth = this.props.currMonth === dateObj.month;
      return (
        <div
          className={isInCurrMonth ? 'calendarCell' : 'calendarCell notCurrMonthDay'}
          key={[dateObj.date] + [dateObj.month] + [dateObj.year]}
          style={{ background: this.isToday(dateObj) ? '#c1c0bd' : '#fffdf9' }}
        >
          {dateObj.date}
          {eventsOnMonth.map((event) => {
            if (event.date === dateObj.date && event.month === dateObj.month) {
              return <EventMonth className="eventMonth" key={event.id} event={event} />;
            } return null;
          })}
        </div>
      );
    });
    return (
      <div className="row">
        {dates}
      </div>
    );
  }
}
