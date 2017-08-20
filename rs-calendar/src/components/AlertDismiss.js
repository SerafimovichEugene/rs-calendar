import React from 'react';
import { Button, Alert } from 'react-bootstrap';

export default class AlertDismiss extends React.Component {

  render() {
    if (this.props.isAlert && this.props.success) {
      return (
        <Alert bsStyle="success" onDismiss={() => this.props.handleAlertDismiss(false)}>
          <h4>Event was added!</h4>
          <p>
            <Button
              bsStyle="success"
              onClick={() => this.props.handleAlertDismiss(false)}
            >Ok</Button>
          </p>
        </Alert>
      );
    } else if (this.props.isAlert && !this.props.success) {
      return (
        <Alert bsStyle="danger" onDismiss={() => this.props.handleAlertDismiss(false)}>
          <h4>Something go wrong!</h4>
          <p>
            <Button
              bsStyle="danger"
              onClick={() => this.props.handleAlertDismiss(false)}
            >
            Ok
            </Button>
          </p>
        </Alert>
      );
    }
    return null;
  }
}
