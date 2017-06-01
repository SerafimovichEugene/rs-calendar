import React from 'react';
import {connect} from 'react-redux';

import { nextMonth, prevMonth, selectDate} from '../actions';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarRow from './CalendarRow';

export default class Calendar extends React.Component {

    render() {        
        const weeks = this.props.calendar.currentDataMatrix;
        let i = 0;
        const CalendarRows = weeks.map(week => (
            <CalendarRow week={week} key={i++}/>
        )); 

        return (
            <div className='container'>
                 {CalendarRows}            
            </div>
        )
    }
}
