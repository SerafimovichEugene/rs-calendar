import React from 'react';
import Button from './Button';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row' id='navigation'>
                    <Button name="Month" id='view'onChangePage={this.props.onMonth}/>
                    <Button name="Week" id='view' onChangePage={this.props.onWeek}/>
                    <Button name="Today" id='view' onChangePage={this.props.onToday}/>
                    
                    <Button 
                        name="Next"
                        id='change' 
                        onChangePage={this.props.displayWeek ? this.props.onNextWeek : this.props.onNextMonth}/>
                    <Button 
                        name="Prev"
                        id='change'
                        onChangePage={this.props.displayWeek ? this.props.onPrevWeek : this.props.onPrevMonth}/>
                </div>
            </div>
        )
    }
}
