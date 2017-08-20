import React from 'react';
import Button from './Button';

export default class CalendarSwitcher extends React.Component {
  render() {
    return (
      <div id="currentMonth" className="clearfix">
        <Button
          icon="left"
          className="btn btn-default switcher left clearfix"
          onChangePage={this.props.displayMonth ? this.props.onPrevMonth : this.props.onPrevWeek}
        />
        <span>
          {this.props.currentMonthName} - {this.props.currentYear}
        </span>
        <Button
          icon="right"
          className="btn btn-default switcher right clearfix"
          onChangePage={this.props.displayMonth ? this.props.onNextMonth : this.props.onNextWeek}
        />
      </div>
    );
  }
}
