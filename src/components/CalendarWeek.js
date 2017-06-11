import React from 'react';
import CalendarWeekColumnTime from './CalendarWeekColumnTime';
import CalendarWeekColumnDay from './CalendarWeekColumnDay';

export default class CalendarWeek extends React.Component {
    render() {
        const currentWeekDates = this.props.calendar.currentWeekDates;
        const events = this.props.events;
        let ColumnId = 0;
        let columns = [];
        columns.push(
            <CalendarWeekColumnTime
                key={ColumnId++}
                columnClassName={'col-time'}
                itemClass={'time'}
                timeColumn={true}
            />
        );
        let eventsOnWeek = [];
        //get events for current week
        for(let i = 0; i < 7; i++) {
            for(let j = 0; j < events.length; j++) {
                if( currentWeekDates[i].year == events[j].year && 
                    currentWeekDates[i].month == events[j].month &&
                    currentWeekDates[i].date == events[j].date) {
                    eventsOnWeek.push({event: events[j], day: currentWeekDates[i].day});
                }
            }            
        }
        for(let i = 0; i < 7; i++) {
            let dayEvents = [];
            eventsOnWeek.forEach((event) => {
                event.day == currentWeekDates[i].day ? (dayEvents.push(event.event)) : null
            });
            columns.push(
                <CalendarWeekColumnDay
                    key={ColumnId++}
                    columnClassName={'col-day'}
                    itemClass={'day'}
                    day={this.props.calendar.daysOfWeek[i]}
                    date={currentWeekDates[i].date}
                    month={currentWeekDates[i].month}
                    events={dayEvents}
                    isToday={this.isToday(currentWeekDates[i])}
                />
            );           
        }  
        return (
            
            <div className='container'
                id='calendar-week'                 
                style={{display: (this.props.calendar.displayWeek && this.props.showCalendar) ? 'block' : 'none'}}>
                 <div id='currentMonth'>
                    <span>
                        {this.props.calendar.currentMonthName} - {this.props.calendar.currentYear}
                    </span>
                </div>                               
                <div className='row'>
                    {columns}
                </div>
            </div>
        )
    }

    isToday(day) {
        let isToday = false;
        if(day.date == this.props.calendar.today &&
            day.month == this.props.calendar.todayMonth &&
            day.year == this.props.calendar.todayYear) {
            isToday = true;
        }
        return isToday;
    }

    
}
