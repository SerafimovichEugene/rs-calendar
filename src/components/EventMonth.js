import React from 'react';
import {connect} from 'react-redux';
import { showEvent } from '../actions';

class EventMonth extends React.Component {
    render() {
        return (
            <div className='eventMonth' onClick={(e) => {
                this.props.onShowEvent(this.props.event, true);
            }}>
                {this.props.event.type}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {       
        onShowEvent: (event, show) => {
            console.log('inside eventMonth', show);
            dispatch(showEvent(event, show));
        }
    };
}

export default connect(null, mapDispatchToProps)(EventMonth);
