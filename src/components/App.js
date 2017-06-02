import React from 'react';
import {connect} from 'react-redux';

import {nextMonth, prevMonth, today, selectDate, week} from '../actions';

import Navigation from './Navigation';
import Calendar from './Calendar';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation
                    onNextMonth={this.props.onNextMonth}
                    onPrevMonth={this.props.onPrevMonth}
                    onToday={this.props.onToday}
                    onSelectDate={this.props.onSelectDate}
                    currentMonthName={this.props.calendar.currentMonthName}
                    currentYear={this.props.calendar.currentYear}/>
                <Calendar calendar={this.props.calendar}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {calendar: state.calendar};
}

function mapDispatchToProps(dispatch) {
    return {
        onNextMonth: month => {
            dispatch(nextMonth(month));
        },
        onPrevMonth: month => {
            dispatch(prevMonth(month));
        },
        onToday: () => {
            dispatch(today());
        },
        week: () => {
            dispatch(week());
        },
        onSelectDate: date => {
            dispatch(selectDate(date));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
