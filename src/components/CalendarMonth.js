import React from 'react';
import CalendarRow from './CalendarRow';

export default class CalendarMonth extends React.Component {
    render() {        
        const weeks = this.props.calendar.currentDataMatrix;
        let i = 0;
        const CalendarRows = weeks.map(week => (
            <CalendarRow week={week} key={i++}/>
        )); 

        return (
            <div className='container' id='calendar-month'>
                 {CalendarRows}            
            </div>
        )
    }
}
