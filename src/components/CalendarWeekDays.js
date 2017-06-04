import React from 'react';

export default class CalendarWeekDays extends React.Component {

    render() {
        let daysOfWeek = [];
        console.log('calendar week days - dates:', this.props.dates);
        if(this.props.dates) {
            for(let i = 0; i < this.props.dates.length; i++) {
                daysOfWeek.push(
                    <div className='calendarCell' key={[this.props.dates[i].date] + [this.props.dates[i].month]}>
                        {this.props.daysOfWeek[i]} - {this.props.dates[i].date}/{this.props.dates[i].month + 1}
                    </div>
                );
            }
        }
        else {
            daysOfWeek = this.props.daysOfWeek.map(day => (
                <div className='calendarCell' key={day}>
                    {day} 
                </div>
            ));
        }
        
        return (            
            <div className="row" id='calendar-days'>
                {daysOfWeek}
            </div>
        )
    }
}
