import React from 'react';
import {connect} from 'react-redux';
import { showEvent } from '../actions';

class EventWeek extends React.Component {
    render() {
        console.log(this.props.event);
        return (
            <div className='event-day' 
                onClick={(e) => {
                    this.props.onShowEvent(this.props.event);
                }}
                style={{top: (this.props.event.hour + (this.props.event.minute / 100))*30 + 'px'}}>
                {this.props.event.type}
                <p>{'start: ' + this.props.event.hour + ':' + this.props.event.minute}</p>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {   
    return {            
        onShowEvent: (event) => {
            console.log(event);
            dispatch(showEvent(event));
        }
    };
}

export default connect(null, mapDispatchToProps)(EventWeek);
