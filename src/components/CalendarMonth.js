import React from 'react';
import { chunk } from 'lodash';
import CalendarMonthRow from './CalendarMonthRow';
import CalendarMonthDays from './CalendarMonthDays';

export default class CalendarMonth extends React.Component {
   
    render() {        
        const currYear = this.props.calendar.currentYear;
        const currMonth = this.props.calendar.currentMonth;
        const events = this.props.events;
        let eventsOnMonth = [];
        for(let i = 0; i < this.props.events.length; i++) {
            if(currYear == events[i].year && currMonth == events[i].month) {
                eventsOnMonth.push(events[i]);
            }
        } 
        const weeks = this.props.calendar.currentDataMatrix;
        let i = 0;
        const CalendarRows = weeks.map(week => {            
            return (
                <CalendarMonthRow
                    week={week}
                    key={++i + [currMonth] + [currYear]}
                    currentYear={currYear}
                    currentMonth={currMonth}
                    eventsOnMonth={eventsOnMonth}
                    />
                )
            });
        return (
            <div 
                className='container'
                id='calendar-month'
                style={{display: (this.props.calendar.displayMonth && this.props.showCalendar) ? 'block' : 'none'}}>
                <CalendarMonthDays daysOfWeek={this.props.calendar.daysOfWeek}/>
                {CalendarRows}                
            </div>
        )
    }
}
// style={{visibility: this.props.showCalendar ? 'visible' : 'collapse'}}
