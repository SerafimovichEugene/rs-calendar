import React from 'react';
import EventWeek from './EventWeek'

export default class CalendarWeekColumDay extends React.Component {

    render() { 
        let items = [];
        let i = 0;
        //dispalay top date 
        items.push(
            <div className={this.props.itemClass} key={i++}>
                {this.props.day + ' - ' + this.props.date + '/' + (+this.props.month + 1)}
            </div>
        );

        let events= [];
        if (this.props.events.length) {
            this.props.events.forEach((event) => {
                events.push(<EventWeek  event={event} key={event.id}/>)
            });
        }
        let timeCells = [];
        for(let j = 0; j < 24; j++) {
            timeCells.push(
                <div 
                    className={'hour-cell'} 
                    key={j + [this.props.day]}
                    style={{top: j*25 + 'px'}}>
                </div>
            );
        }
        items.push(
            <div className={'event-day-wrapper'} key={i++}> 
                {events}
                {timeCells}
            </div>
        ); 

        return (
            <div className={this.props.columnClassName}
                style={{backgroundColor: this.props.isToday ? '#c1c0bd' : '#fffdf9'}}>
                {items}
            </div>
        )
    }
}
