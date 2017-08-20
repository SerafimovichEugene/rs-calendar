import React from 'react';
import { Button } from 'react-bootstrap';

export default class AdminEventRow extends React.Component {
  render() {
    return (
      <div className="row adminEventRow">
        <div className="col-xs-3 type">
          <span className="eventType">{this.props.eventType}</span>
        </div>
        <div className="col-xs-3 startAt">
          <span className="eventType">{this.props.eventStartAt}</span>
        </div>
        <div className="col-xs-5 location">
          <span className="eventType location">{this.props.eventLocation}</span>
        </div>
        <div className="col-xs-1 deleteBtn">
          <Button
            bsSize="large"
            onClick={() => this.props.deleteRow(this.props.id)}
          >
            <span className="glyphicon glyphicon-trash" />
          </Button>
        </div>
      </div>
    );
  }
}
