import React from 'react';

export default class CalendarMonthDays extends React.Component {

    render() {
        
        let daysOfWeek = this.props.daysOfWeek.map(day => (
                <div className='month-day' key={day}>
                    {day}
                </div>
            ));
        // console.log('CalendarMonthDays ', daysOfWeek);
        return (
            <div className="row" id='month-days'>
                {daysOfWeek}
            </div>
        )
    }
}
