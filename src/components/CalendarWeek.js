import React from 'react';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarWeekRow from './CalendarWeekRow';


export default class CalendarWeek extends React.Component {
    render() {        
        let times = [];

        for(let i = 7; i<=24; i++) {
            times.push(
                <div className='row'>
                    <div
                        className='time'
                        key={[this.props.calendar.currentMonth] + [this.props.calendar.currentYear]}>
                        {i + '.00 '}
                    </div>                              
                </div>
            );
        }

        times.forEach((time) => {
            
        });


        return (
            <div className='container' id='calendar-week' style={{display: this.props.calendar.displayWeek ? 'block' : 'none'}}>
                <CalendarWeekDays 
                    daysOfWeek={this.props.calendar.daysOfWeek}
                    dates={this.props.calendar.currentWeekDates}/>
                {times}    
            </div>
        )
    }
}
