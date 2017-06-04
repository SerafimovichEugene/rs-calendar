import React from 'react';
import CalendarMonthRow from './CalendarMonthRow';
import CalendarMonthDays from './CalendarMonthDays';

export default class CalendarMonth extends React.Component {
    render() {
        const weeks = this.props.calendar.currentDataMatrix;
        let i = 0;
        const CalendarRows = weeks.map(week => {            
            return (
                <CalendarMonthRow
                    week={week}
                    key={++i + [this.props.calendar.currentMonth] + [this.props.calendar.currentYear]}
                    currentYear={this.props.calendar.currentYear}
                    currentMonth={this.props.calendar.currentMonth}/>
                )
            });
        return (
            <div
                className='container'
                id='calendar-month'
                style={{display: this.props.calendar.displayMonth ? 'block' : 'none'}}>
                <CalendarMonthDays daysOfWeek={this.props.calendar.daysOfWeek}/> 
                {CalendarRows}
            </div>
        )
    }
}
