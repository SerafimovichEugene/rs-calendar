import React from 'react';
import { connect } from 'react-redux';
import { nextMonth, prevMonth, nextWeek, prevWeek, today, showSignInForm, signOut, showAdminPanel, display, changeTab, showEventForm, showSpeakerForm } from '../actions';
import Navigation from './Navigation';
import CalendarMonth from './CalendarMonth';
import CalendarWeek from './CalendarWeek';
import EventWindow from './EventWindow';
import AdminPanel from './AdminPanel';
import Spinner from './Spinner';
import AdminLogIn from './AdminLogIn';
import AdminEventAddForm from './AdminEventAddForm';
import AdminSpeakerAddForm from './AdminSpeakerAddForm';
import { deleteCookie } from '../helpers/cookieHelper';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid" id="app">
        <Navigation
          onToday={this.props.onToday}
          onSignIn={this.props.onSignIn}
          onSignOut={this.props.onSignOut}
          displayWeek={this.props.calendar.displayWeek}
          currentWeek={this.props.calendar.currentWeek}
          userName={this.props.userName}
          onDisplay={this.props.onDisplay}
        />
        <Spinner showSpinner={this.props.isFetching} />
        <CalendarMonth
          calendar={this.props.calendar}
          events={this.props.events}
          showCalendar={
            !this.props.isFetching &&
            this.props.display.displayMonth}
          currentMonthName={this.props.calendar.currentMonthName}
          currentYear={this.props.calendar.currentYear}
          onNextMonth={this.props.onNextMonth}
          onPrevMonth={this.props.onPrevMonth}
        />
        <CalendarWeek
          calendar={this.props.calendar}
          events={this.props.events}
          showCalendar={
            !this.props.isFetching &&
            this.props.display.displayWeek}
          onNextWeek={this.props.onNextWeek}
          onPrevWeek={this.props.onPrevWeek}
        />
        <AdminPanel
          showAdminPanel={
            !this.props.isFetching &&
            this.props.display.displayAdmin
          }
          currentTab={this.props.tab}
          events={this.props.events}
          speakers={this.props.speakers}
          onAdd={this.props.onAdd}
          onTab={this.props.onTab}
        />
        <EventWindow />
        <AdminLogIn />
        <AdminEventAddForm />
        <AdminSpeakerAddForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    calendar: state.calendarReducer.calendar,
    events: state.fetchDataReducer.events,
    speakers: state.fetchDataReducer.trainersArray,
    isFetching: state.fetchDataReducer.isFetching,
    userName: state.adminReducer.userName,
    display: state.displayReducer,
    tab: state.adminReducer.tab,
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
    onSignIn: () => {
      dispatch(showSignInForm(true));
    },
    onSignOut: () => {
      deleteCookie('token');
      deleteCookie('userName');
      dispatch(signOut());
      dispatch(display([true, false, false]));
    },
    onAdmin: () => {
      dispatch(showAdminPanel(true));
    },
    onDisplay: (isMonth, isWeek, isAdmin) => {
      dispatch(display(isMonth, isWeek, isAdmin));
    },
    onTab: (tab) => {
      dispatch(changeTab(tab));
    },
    onAdd: (currentTab) => {
      if (currentTab === 'events') dispatch(showEventForm(true));
      if (currentTab === 'speakers') dispatch(showSpeakerForm(true));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
