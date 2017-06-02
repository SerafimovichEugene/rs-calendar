import React from 'react';

import Button from './Button';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className='row' id='navigation'>
                <Button name="Month" id='view'/>
                <Button name="Week" id='view'/>
                <Button name="Today" id='view' onChangePage={this.props.onToday}/>

                <span id='currentView'>
                    {this.props.currentMonthName} - {this.props.currentYear}
                </span>
                
                <Button name="Next" id='changeMonth' onChangePage={this.props.onNextMonth}/>
                <Button name="Prev" id='changeMonth' onChangePage={this.props.onPrevMonth}/>
            </div>
        )
    }
}
