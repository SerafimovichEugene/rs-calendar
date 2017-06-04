import React from 'react';

import Button from './Button';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className='row' id='navigation'>
                <Button name="Month" id='view'onChangePage={this.props.onMonth}/>
                <Button name="Week" id='view' onChangePage={this.props.onWeek}/>
                <Button name="Today" id='view' onChangePage={this.props.onToday}/>

                <span id='currentView'>
                    {this.props.currentMonthName} - {this.props.currentYear}
                </span>
                
                <Button 
                    name="Next"
                    id='change' 
                    onChangePage={this.props.displayWeek ? this.props.onNextWeek : this.props.onNextMonth}/>
                <Button 
                    name="Prev"
                    id='change'
                    onChangePage={this.props.displayWeek ? this.props.onPrevWeek : this.props.onPrevMonth}/>
            </div>
        )
    }
}
