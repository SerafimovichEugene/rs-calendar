import React from 'react';
import { Button } from 'react-bootstrap';

export default class AdminSpeakerRow extends React.Component {
  render() {
    return (
      <div className="row adminSpeakertRow">
        <div className="col-xs-3 type">
          <img
            key
            src={this.props.avatar}
            alt={'avatar'}
            className="img-rounded"
            width="50"
            height="50"
          />
        </div>
        <div className="col-xs-8">
          <span>{this.props.name}</span>
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
