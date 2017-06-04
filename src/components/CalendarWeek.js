import React from 'react';
import CalendarWeekColumn from './CalendarWeekColumn';


export default class CalendarWeek extends React.Component {
    render() {
        let ColumnId = 0;
        let columns = [];
        columns.push(
            <CalendarWeekColumn
                    key={ColumnId++}
                    columnClassName={'col-time'}
                    itemClass={'time'}
                    timeColumn={true}
            />
        );
        for(let i = 0; i < 7; i++) {
            columns.push(
                <CalendarWeekColumn
                    key={ColumnId++}
                    columnClassName={'col-day'}
                    itemClass={'day'}
                    day={this.props.calendar.daysOfWeek[i]}
                    date={this.props.calendar.currentWeekDates[i].date}
                    month={this.props.calendar.currentWeekDates[i].month}
                />
            );           
        }  
        return (
            <div className='container' id='calendar-week' style={{display: this.props.calendar.displayWeek ? 'block' : 'none'}}>                               
                <div className='row'>
                    {columns}
                </div>
            </div>
        )
    }

    
}
