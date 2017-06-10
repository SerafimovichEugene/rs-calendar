import React from 'react';
import { connect } from 'react-redux';
import { nextMonth, prevMonth, nextWeek, prevWeek, today, week, month } from '../actions';
import Navigation from './Navigation';
import CalendarMonth from './CalendarMonth';
import CalendarWeek from './CalendarWeek';
import EventWindow from './EventWindow';
import Spinner from './Spinner';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid" id='app'> 
                <Navigation
                    onNextMonth={this.props.onNextMonth}
                    onPrevMonth={this.props.onPrevMonth}
                    onNextWeek={this.props.onNextWeek}
                    onPrevWeek={this.props.onPrevWeek}
                    onToday={this.props.onToday}
                    onWeek={this.props.onWeek}
                    onMonth={this.props.onMonth}
                    onSelectDate={this.props.onSelectDate}
                    displayWeek={this.props.calendar.displayWeek}
                    currentWeek={this.props.calendar.currentWeek}/>
                    
                <Spinner showSpinner={this.props.isFetching}/>
                <CalendarMonth 
                    calendar={this.props.calendar}
                    events={this.props.events}
                    showCalendar={!this.props.isFetching}
                    currentMonthName={this.props.calendar.currentMonthName}
                    currentYear={this.props.calendar.currentYear}
                    />
                <CalendarWeek 
                    calendar={this.props.calendar}
                    events={this.props.events}
                    showCalendar={!this.props.isFetching}/>
                <EventWindow />
            </div>
        )
    }
}

function mapStateToProps(state) {    
    return {calendar: state.calendar_reducer.calendar,
            events: state.fetchData_reducer.events,
            isFetching: state.fetchData_reducer.isFetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onNextMonth: month => {
            dispatch(nextMonth(month));
        },
        onPrevMonth: month => {
            dispatch(prevMonth(month));
        },
        onNextWeek: week => {
            dispatch(nextWeek(week));
        },
        onPrevWeek: week => {
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
        }        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
