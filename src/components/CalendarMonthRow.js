import React from 'react';
import EventMonth from './EventMonth';
import {forEach} from 'lodash';
export default class CalendarMonthRow extends React.Component {

    render() {
        const eventsOnMonth = this.props.eventsOnMonth;    
        const dates = this.props.week.map(dateObj => {
            return (
                <div 
                    className='calendarCell'
                    key={[dateObj.date] + [dateObj.month] + [dateObj.year]}
                    style={{background: this.isToday(dateObj) ? '#c1c0bd' : '#fffdf9'}}>
                    {dateObj.date}
                    {eventsOnMonth.map((event) => {
                        if (event.date == dateObj.date && event.month == dateObj.month) {
                            return <EventMonth className='eventMonth' key={event.id} event={event}/>
                        }
                    })}
                </div>
            )
        });
        return (
            <div className="row">
                {dates}
            </div>
        )
    }

    isToday(dateObj) {
        let isToday = false;
        this.props.week.forEach((day) => {
             if(this.props.today == dateObj.date && 
                this.props.todayMonth ==  dateObj.month && 
                this.props.todayYear == dateObj.year) {
                isToday = true;
            }
        });
        return isToday;
    }
}
