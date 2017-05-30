import React from 'react';

import CalendarWeekDays from './CalendarWeekDays';
import CalendarRow from './CalendarRow';

import DataProvider from '../core/calendarDataProvider'; 
import  { chunk } from 'lodash';


export default class Calendar extends React.Component {

    render() {
        const dataProvider = new DataProvider();
        let devider;
        const monthDates = dataProvider.getCalendarData(dataProvider.currentYear, dataProvider.currentMonth);
        const weeks = chunk(monthDates, 7);
        
        let i = 0;
        const CalendarRows = weeks.map(week => (
            <CalendarRow week={week} key={i++}/>
        ));
        
        return (
            <div className='container'>
                 <CalendarWeekDays daysOfWeek={dataProvider.daysOfWeek}/>
                 {CalendarRows}
            </div>
        )
    }
}
