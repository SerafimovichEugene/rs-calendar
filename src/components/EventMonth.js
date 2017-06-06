import React from 'react';
import {connect} from 'react-redux';
import { selectEvent } from '../actions';

class EventMonth extends React.Component {
    render() {
        return (
            <div className='eventMonth' onClick={(e) => {
                this.props.onSelectEvent(this.props.event);
            }}>
                {this.props.event.type}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {       
        onSelectEvent: id => {
            dispatch(selectEvent(id));
        }
    };
}

export default connect(null, mapDispatchToProps)(EventMonth);