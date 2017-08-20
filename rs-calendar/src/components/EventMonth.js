import React from 'react';
import { connect } from 'react-redux';
import { showEvent } from '../actions';

class EventMonth extends React.Component {
  render() {
    return (
      <div
        className="eventMonth" onClick={() => {
          this.props.onShowEvent(this.props.event);
        }}
      >
        {this.props.event.type}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onShowEvent: (event) => {
      dispatch(showEvent(event));
    },
  };
}

export default connect(null, mapDispatchToProps)(EventMonth);
