import React from 'react';

export default class CalendarRow extends React.Component {

    render() {
        
        const dates = this.props.week.map(dateObj => (
            <div className='calendarCell' key={dateObj.date}>{dateObj.date}</div>
        ));
        
        return (
            <div className="row">
                {dates}
            </div>
        )
    }
}
