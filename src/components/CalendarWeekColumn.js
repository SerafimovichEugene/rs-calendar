import React from 'react';


export default class CalendarWeekColumn extends React.Component {

    render() {
        let items = [];
        let i = 0;
        items.push(
            <div className={this.props.itemClass} key={i++}>
                {this.props.day ? (this.props.day + ' - ' + this.props.date + '/' + (+this.props.month + 1)): ''}
            </div>
        ); 
        for(let i = 7; i <= 23; i++) {
            items.push(
                <div className={this.props.itemClass}  key={i++}>
                    {this.props.timeColumn ? (i + ':00') : '123'}
                </div> 
            );
        }
        return (
            <div className={this.props.columnClassName}>
                {items}
            </div>
        )
    }
}
