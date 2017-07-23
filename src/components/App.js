import React from 'react';
import { connect } from 'react-redux';
import { nextMonth, prevMonth, nextWeek, prevWeek, today, week, month, showAdminLogIn } from '../actions';
import Navigation from './Navigation';
import CalendarMonth from './CalendarMonth';
import CalendarWeek from './CalendarWeek';
import EventWindow from './EventWindow';
import Spinner from './Spinner';
import AdminLogIn from './AdminLogIn';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid" id="app">
        <Navigation
          onToday={this.props.onToday}
          onWeek={this.props.onWeek}
          onMonth={this.props.onMonth}
          onAdmin={this.props.onAdmin}
          displayWeek={this.props.calendar.displayWeek}
          currentWeek={this.props.calendar.currentWeek}
        />
        <Spinner showSpinner={this.props.isFetching} />
        <CalendarMonth
          calendar={this.props.calendar}
          events={this.props.events}
          showCalendar={
            !this.props.isFetching &&
            this.props.calendar.displayMonth}
          currentMonthName={this.props.calendar.currentMonthName}
          currentYear={this.props.calendar.currentYear}
          onNextMonth={this.props.onNextMonth}
          onPrevMonth={this.props.onPrevMonth}
          onNextWeek={this.props.onNextWeek}
          onPrevWeek={this.props.onPrevWeek}
          displayWeek={this.props.calendar.displayWeek}
        />
        <CalendarWeek
          calendar={this.props.calendar}
          events={this.props.events}
          showCalendar={
            !this.props.isFetching &&
            this.props.calendar.displayWeek}
          onNextMonth={this.props.onNextMonth}
          onPrevMonth={this.props.onPrevMonth}
          onNextWeek={this.props.onNextWeek}
          onPrevWeek={this.props.onPrevWeek}
          displayWeek={this.props.calendar.displayWeek}
        />
        <EventWindow />
        <AdminLogIn />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    calendar: state.calendarReducer.calendar,
    events: state.fetchDataReducer.events,
    isFetching: state.fetchDataReducer.isFetching,
    // showAdminPage: state.adminReducer.showAdminPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNextMonth: (month) => {
      dispatch(nextMonth(month));
    },
    onPrevMonth: (month) => {
      dispatch(prevMonth(month));
    },
    onNextWeek: (week) => {
      dispatch(nextWeek(week));
    },
    onPrevWeek: (week) => {
      dispatch(prevWeek(week));
    },
    onToday: (displayWeek) => {
      dispatch(today(displayWeek));
    },
    onWeek: (currentWeek) => {
      dispatch(week(currentWeek));
    },
    onMonth: () => {
      dispatch(month());
    },
    onAdmin: () => {
      dispatch(showAdminLogIn());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
