import React from 'react';
import {connect} from 'react-redux';

import {nextMonth, prevMonth, selectDate} from '../actions';

import Navigation from './Navigation';
import Calendar from './Calendar';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation
                    onNextMonth={this.props.onNextMonth}
                    onPrevMonth={this.props.onPrevMonth}
                    onSelectDate={this.props.onSelectDate}/>
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
            console.log('Next Month');
            dispatch(nextMonth(month));
        },
        onPrevMonth: month => {
            console.log('Prev Month');
            dispatch(prevMonth(month));
        },
        onSelectDate: date => {
            console.log('select');
            dispatch(selectDate(date));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
