import React from 'react';

export default class CalendarMonthRow extends React.Component {

    render() {
        const dates = this.props.week.map(dateObj => {
            return (
                <div                 
                    className='calendarCell' 
                    key={[dateObj.date] + [dateObj.month] + [dateObj.year]}>
                    {dateObj.date}
                </div>
            )
        });

        return (
            <div className="row">
                {dates}
            </div>
        )
    }
}
