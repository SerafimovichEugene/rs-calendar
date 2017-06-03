import React from 'react';

export default class CalendarWeekDays extends React.Component {

    render() {
        const daysOfWeek = this.props.daysOfWeek.map(day => (
            <div className='calendarCell' key={day}>{day}</div>
        ));
        return (            
            <div className="row">
                {daysOfWeek}
            </div>
        )
    }
}
