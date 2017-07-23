import React from 'react';
import Button from './Button';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row" id="navigation">
          <Button
            name="Month"
            className="btn btn-default changeView"
            onChangePage={this.props.onMonth}
          />
          <Button
            name="Week"
            className="btn btn-default changeView"
            onChangePage={this.props.onWeek}
            arg={this.props.currentWeek}
          />
          <Button
            name="Today"
            className="btn btn-default changeView"
            onChangePage={this.props.onToday}
            arg={this.props.displayWeek}
          />
          <Button
            name="Admin"
            className="btn btn-default admin"
            onChangePage={this.props.onAdmin}
          />
        </div>
      </div>
    );
  }
}
