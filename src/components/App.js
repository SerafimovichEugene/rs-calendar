import React from 'react';
import {connect} from 'react-redux';

import {nextMonth, prevMonth, nextWeek, prevWeek, today, selectDate, week, month, selectEvent} from '../actions';

import Navigation from './Navigation';
import CalendarMonth from './CalendarMonth';
import CalendarWeek from './CalendarWeek';
import EventWindow from './EventWindow';

class App extends React.Component {
    render() {
        return (
            <div className="container" id='app'>
                <Navigation
                    onNextMonth={this.props.onNextMonth}
                    onPrevMonth={this.props.onPrevMonth}
                    onNextWeek={this.props.onNextWeek}
                    onPrevWeek={this.props.onPrevWeek}
                    onToday={this.props.onToday}
                    onWeek={this.props.onWeek}
                    onMonth={this.props.onMonth}
                    onSelectDate={this.props.onSelectDate}
                    currentMonthName={this.props.calendar.currentMonthName}
                    currentYear={this.props.calendar.currentYear}
                    displayWeek={this.props.calendar.displayWeek}/>
                <CalendarMonth 
                    calendar={this.props.calendar}
                    events={this.props.events}
                    />
                <CalendarWeek calendar={this.props.calendar}/>
                <EventWindow />
            </div>
        )
    }
}

function mapStateToProps(state) {    
    return {calendar: state.calendar_reducer.calendar,
            events: state.calendar_reducer.events
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
        onToday: () => {
            dispatch(today());
        },
        onWeek: () => {
            dispatch(week());
        },
        onMonth: () => {
            dispatch(month());
        },
        onSelectDate: date => {
            dispatch(selectDate(date));
        }       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
