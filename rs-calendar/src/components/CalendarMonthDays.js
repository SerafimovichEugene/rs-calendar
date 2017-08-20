import React from 'react';

export default class CalendarMonthDays extends React.Component {

  render() {
    const daysOfWeek = this.props.daysOfWeek.map(day => (
      <div className="month-day" key={day}>
        {day}
      </div>
      ));
    return (
      <div className="row" id="month-days">
        {daysOfWeek}
      </div>
    );
  }
}
