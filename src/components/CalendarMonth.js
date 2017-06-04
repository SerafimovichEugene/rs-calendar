import React from 'react';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarRow from './CalendarRow';

export default class CalendarMonth extends React.Component {
    render() {
        const weeks = this.props.calendar.currentDataMatrix;
        let i = 0;
        const CalendarRows = weeks.map(week => {            
            return (
                <CalendarRow
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
                <CalendarWeekDays daysOfWeek={this.props.calendar.daysOfWeek} key={"wer"}/> 
                {CalendarRows}
            </div>
        )
    }
}
