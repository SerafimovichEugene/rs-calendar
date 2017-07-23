import React from 'react';
import Button from './Button';

export default class CalendarSwitcher extends React.Component {
  render() {
    return (
      <div id="currentMonth" className="clearfix">
        <Button
          turnPage="left"
          className="btn btn-default switcher left clearfix"
          onChangePage={this.props.displayWeek ? this.props.onPrevWeek : this.props.onPrevMonth}
        />
        <span>
          {this.props.currentMonthName} - {this.props.currentYear}
        </span>
        <Button
          turnPage="right"
          className="btn btn-default switcher right clearfix"
          onChangePage={this.props.displayWeek ? this.props.onNextWeek : this.props.onNextMonth}
        />
      </div>
    );
  }
}
